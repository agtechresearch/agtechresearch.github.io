// Vercel Serverless Function for Gallery Management
const { Octokit } = require("@octokit/rest");

// Simple authentication - change this password!
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "agtech2024!";

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { password, action, data } = req.body;

    // Verify password
    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // GitHub token from environment variable
    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubToken) {
      return res.status(500).json({ error: 'GitHub token not configured' });
    }

    const octokit = new Octokit({ auth: githubToken });

    const owner = 'agtechresearch';
    const repo = 'agtechresearch.github.io';

    if (action === 'add') {
      // Add new gallery item
      const { title, description, category, alt, date, imageData, imageFileName } = data;

      // Generate filename from date and title
      const dateObj = new Date(date);
      const slug = title.toLowerCase()
        .replace(/[^a-z0-9가-힣]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .substring(0, 30);

      const jsonFileName = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}-${slug}.json`;

      // 1. Upload image to images/gallery/
      const imageContent = imageData.split(',')[1]; // Remove data:image/...;base64,
      await octokit.repos.createOrUpdateFileContents({
        owner,
        repo,
        path: `images/gallery/${imageFileName}`,
        message: `Add gallery image: ${imageFileName}`,
        content: imageContent,
        branch: 'main'
      });

      // 2. Create JSON file in _data/gallery/
      const jsonContent = {
        title,
        description,
        category,
        image: `images/gallery/${imageFileName}`,
        alt,
        date,
        published: true
      };

      await octokit.repos.createOrUpdateFileContents({
        owner,
        repo,
        path: `_data/gallery/${jsonFileName}`,
        message: `Add gallery data: ${title}`,
        content: Buffer.from(JSON.stringify(jsonContent, null, 2)).toString('base64'),
        branch: 'main'
      });

      // 3. Update gallery.js to include new file
      const galleryJsResponse = await octokit.repos.getContent({
        owner,
        repo,
        path: 'js/gallery.js',
        ref: 'main'
      });

      const galleryJsContent = Buffer.from(galleryJsResponse.data.content, 'base64').toString('utf-8');

      // Find the galleryFiles array and add new file
      const filesArrayMatch = galleryJsContent.match(/const galleryFiles = \[([\s\S]*?)\];/);
      if (filesArrayMatch) {
        const currentFiles = filesArrayMatch[1]
          .split('\n')
          .map(line => line.trim())
          .filter(line => line.startsWith("'"))
          .map(line => line.replace(/[',]/g, '').trim());

        currentFiles.push(jsonFileName);

        const newFilesArray = currentFiles.map(f => `                '${f}'`).join(',\n');
        const updatedContent = galleryJsContent.replace(
          /const galleryFiles = \[([\s\S]*?)\];/,
          `const galleryFiles = [\n${newFilesArray}\n            ];`
        );

        await octokit.repos.createOrUpdateFileContents({
          owner,
          repo,
          path: 'js/gallery.js',
          message: `Update gallery.js: Add ${jsonFileName}`,
          content: Buffer.from(updatedContent).toString('base64'),
          sha: galleryJsResponse.data.sha,
          branch: 'main'
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Gallery item added successfully',
        files: {
          image: `images/gallery/${imageFileName}`,
          json: `_data/gallery/${jsonFileName}`
        }
      });
    }

    return res.status(400).json({ error: 'Invalid action' });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error.message
    });
  }
};
