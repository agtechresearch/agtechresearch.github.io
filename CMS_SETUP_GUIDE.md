# Netlify CMS Setup Guide
## AgTech Research Lab - Gallery Management System

This guide explains how to use the Netlify CMS admin interface to manage gallery images.

---

## 🚀 Quick Start

### Step 1: Enable GitHub OAuth

Netlify CMS requires GitHub authentication. Follow these steps:

#### Option A: Deploy to Netlify (Recommended - Easiest)

1. **Sign up for Netlify**: Go to https://app.netlify.com/signup
   - Sign up with your GitHub account

2. **Connect your repository**:
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select repository: `agtechresearch/agtechresearch.github.io`
   - Click "Deploy site"

3. **Enable Identity & Git Gateway**:
   - Go to your site dashboard on Netlify
   - Click "Identity" tab
   - Click "Enable Identity"
   - Under "Settings and usage" → Scroll to "Services"
   - Click "Enable Git Gateway"

4. **Invite yourself**:
   - Go to "Identity" tab
   - Click "Invite users"
   - Enter your email address
   - Check your email and accept the invitation
   - Set a password

5. **Access the admin panel**:
   - Go to: `https://your-site-name.netlify.app/admin`
   - Or if using custom domain: `https://www.agtechlab.kr/admin`
   - Log in with your email and password

#### Option B: Use GitHub Backend (For GitHub Pages Only)

If you want to keep using GitHub Pages without Netlify:

1. **Install Netlify CMS OAuth Provider**:
   - You'll need to set up an OAuth app on GitHub
   - Deploy a simple OAuth server (using Vercel, Heroku, etc.)
   - This is more complex - see: https://www.netlifycms.org/docs/github-backend/

2. **Update `admin/config.yml`**:
   - Change `base_url` to your OAuth provider URL

---

## 📝 How to Use the CMS Admin Panel

### Accessing the Admin Panel

1. Go to: `https://www.agtechlab.kr/admin`
2. Log in with your credentials
3. You'll see the CMS dashboard

### Adding a New Gallery Image

1. Click on **"Gallery Images"** in the left sidebar
2. Click **"New Gallery Images"** button
3. Fill in the fields:
   - **Title**: Image title (e.g., "Lab Meeting 2024")
   - **Description**: Short description (e.g., "Weekly lab meeting")
   - **Category**: Select from dropdown (laboratory, event, research)
   - **Image**: Click "Choose an image" to upload
   - **Alt Text**: Descriptive text for accessibility
   - **Date Added**: Select the date
   - **Published**: Toggle on to publish immediately

4. Click **"Publish"** → **"Publish now"**
5. The CMS will automatically:
   - Upload the image to `images/gallery/`
   - Create a JSON file in `_data/gallery/`
   - Commit changes to GitHub
   - Deploy to your website

### Editing an Existing Gallery Image

1. Click on **"Gallery Images"** in the left sidebar
2. Click on the image you want to edit
3. Make your changes
4. Click **"Publish"** → **"Publish now"**

### Deleting a Gallery Image

1. Click on **"Gallery Images"** in the left sidebar
2. Click on the image you want to delete
3. Click **"Delete"** button (usually in top-right)
4. Confirm deletion
5. The image and its data file will be removed from GitHub

### Unpublishing an Image (Hide Without Deleting)

1. Click on the image you want to hide
2. Toggle **"Published"** to OFF
3. Click **"Publish"** → **"Publish now"**
4. The image will no longer appear on the website but remains in the repository

---

## 🔧 Technical Details

### File Structure

```
agtechresearch.github.io/
├── admin/
│   ├── index.html          # CMS admin interface
│   └── config.yml          # CMS configuration
├── _data/
│   ├── gallery/            # Gallery JSON data files
│   │   ├── 2024-11-01-asabe-presentation.json
│   │   ├── 2024-11-02-bug-monitoring.json
│   │   └── ...
│   └── gallery_config.json # Gallery configuration
├── images/
│   └── gallery/            # Gallery images
│       ├── ASABE_pr.JPG
│       ├── bug_monitering.jpg
│       └── ...
└── js/
    └── gallery.js          # Gallery loading script
```

### How It Works

1. **JSON Data**: Each gallery image has a corresponding JSON file in `_data/gallery/`
2. **Dynamic Loading**: The `gallery.js` script loads these JSON files
3. **Rendering**: Gallery is rendered dynamically from JSON data
4. **Fallback**: If JSON files can't be loaded, falls back to static HTML

### Gallery JSON Format

```json
{
  "title": "2025 ASABE Presentation",
  "description": "Conference Presentation",
  "category": "event",
  "image": "images/gallery/ASABE_pr.JPG",
  "alt": "ASABE Conference Presentation",
  "date": "2024-11-01T00:00:00.000Z",
  "published": true
}
```

---

## 🛠️ Troubleshooting

### Problem: Can't access /admin page

**Solution**:
- Make sure you've deployed to Netlify and enabled Identity
- Or set up GitHub OAuth provider for GitHub Pages

### Problem: Images not showing on website

**Solution**:
- Check if JSON files are created in `_data/gallery/`
- Check browser console (F12) for JavaScript errors
- Verify `published` is set to `true` in the JSON file

### Problem: CMS won't save changes

**Solution**:
- Check your GitHub permissions
- Make sure you're logged in to the CMS
- Check if Git Gateway is enabled (Netlify)

### Problem: Want to add images manually without CMS

**Solution**:
1. Upload image to `images/gallery/`
2. Create a JSON file in `_data/gallery/` following the format above
3. Update the list of files in `gallery.js` (line 12-18)
4. Commit and push to GitHub

---

## 📋 Categories

Available gallery categories:
- **laboratory**: Lab facilities and equipment
- **event**: Lab events and conferences
- **research**: Field research and experiments

---

## 🔐 Security

- Only users with GitHub repository access can edit via CMS
- All changes are tracked in Git history
- You can revert any changes using Git

---

## 🚀 Deployment

### Using Netlify (Recommended)

- Automatic deployment on every Git push
- Custom domain support
- Free SSL certificate
- CDN for fast loading

### Using GitHub Pages

- Automatic deployment on push to `main` branch
- May need external OAuth provider for CMS
- Free hosting at `username.github.io`

---

## 📚 Additional Resources

- Netlify CMS Docs: https://www.netlifycms.org/docs/
- GitHub Backend Setup: https://www.netlifycms.org/docs/github-backend/
- Netlify Identity: https://docs.netlify.com/visitor-access/identity/

---

## 🆘 Need Help?

If you encounter issues:
1. Check the browser console (F12) for errors
2. Review this guide
3. Check Netlify CMS documentation
4. Contact your web developer

---

**Created**: 2025-11-17
**Version**: 1.0
**For**: AgTech Research Lab Gallery Management
