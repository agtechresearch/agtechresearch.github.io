# AgTech Research Lab Website

This is the official website for the AgTech Research Lab at Sejong University. The site introduces the lab's research, members, publications, and activities, and provides contact information for collaboration and inquiries.

## 🌱 Project Overview
- **Lab:** AgTech Research Lab, Sejong University
- **Purpose:** Showcase research projects, members, publications, gallery, and contact details
- **Tech Stack:** HTML, CSS, JavaScript (Vanilla)

## 🚀 Main Features
- **Responsive homepage** with lab introduction and research areas
- **Members page** with tab navigation (All Members, Current Members, Alumni)
- **Research and publications pages** with interactive modals and filtering
- **Gallery** of lab activities and events with category filters
- **Contact page** with working form (EmailJS/Formspree integration) and Google Maps
- **Image optimization** with lazy loading for better performance
- **Mobile-friendly** responsive design

## 🖥️ Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/agtechresearch/agtech.git
   cd agtech
   ```
2. Open `index.html` in your browser.

No build step is required (pure static site).

## 🌐 Deploy with GitHub Pages
1. Go to your repository's **Settings > Pages**
2. Set the source to `main` branch and `/ (root)`
3. Save and wait a few minutes
4. Your site will be live at: `https://agtechresearch.github.io/agtech/`

## 📁 Folder Structure
```
├── css/
│   └── style.css         # Main stylesheet (2900+ lines)
├── images/
│   ├── hero/             # Hero background images
│   ├── members/          # Member profile photos
│   ├── news/             # News article images
│   └── research/         # Research project images
├── js/
│   ├── main.js           # Global navigation and scroll effects
│   ├── research.js       # Research modal functionality
│   ├── publications.js   # Publication filtering
│   ├── members.js        # Member tab navigation
│   ├── gallery.js        # Gallery filtering
│   └── contact.js        # Contact form handling
├── index.html            # Homepage
├── introduction.html     # Lab introduction
├── members.html          # Members with tabs
├── publications.html     # Publications with filters
├── research.html         # Research projects
├── gallery.html          # Gallery
└── contact.html          # Contact with working form
```

## ⚙️ Configuration

### Contact Form Setup
To enable email sending from the contact form, configure one of the following services in `js/contact.js`:

#### Option 1: Formspree (Recommended - Easy Setup)
1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form and get your form ID
3. Update `js/contact.js`:
   ```javascript
   formspree: {
       endpoint: 'https://formspree.io/f/YOUR_FORM_ID'
   }
   ```

#### Option 2: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a service and email template
3. Update `js/contact.js`:
   ```javascript
   emailjs: {
       serviceId: 'YOUR_SERVICE_ID',
       templateId: 'YOUR_TEMPLATE_ID',
       publicKey: 'YOUR_PUBLIC_KEY'
   }
   ```

If neither is configured, the form will use `mailto:` as a fallback.

## 📝 How to Update Website Content

### For Lab Members: Quick Content Updates

You can update the website content directly through GitHub's web interface - no coding knowledge required!

#### Method 1: Edit Files Directly on GitHub (Easiest)

1. **Go to the repository:** https://github.com/agtechresearch/agtechresearch.github.io
2. **Navigate to the file you want to edit:**
   - Members: `members.html`
   - Research: `research.html`
   - Publications: `publications.html`
   - Gallery images: `images/` folder
3. **Click the pencil icon (✏️)** in the top-right corner to edit
4. **Make your changes** (see CONTENT_EDIT_GUIDE.md for detailed instructions)
5. **Scroll down and click "Commit changes"**
6. **Wait 1-2 minutes** - your changes will automatically appear on the live site!

#### Method 2: Using GitHub Desktop (Recommended for Multiple Changes)

1. **Install GitHub Desktop:** https://desktop.github.com/
2. **Clone the repository:**
   - File → Clone Repository
   - Select `agtechresearch/agtechresearch.github.io`
3. **Make your changes** in any text editor (VS Code, Notepad++, etc.)
4. **Commit and push:**
   - Open GitHub Desktop
   - Review your changes
   - Write a commit message (e.g., "Add new member" or "Update research projects")
   - Click "Commit to main"
   - Click "Push origin"
5. **Wait 1-2 minutes** - changes will appear on the live site!

#### Common Tasks:

**Adding a New Member:**
1. Add profile photo to `images/members/이름.jpg`
2. Edit `members.html` - copy an existing member card and modify the details
3. See CONTENT_EDIT_GUIDE.md for step-by-step instructions

**Updating Publications:**
1. Edit `publications.html`
2. Add new publication entry following the existing format

**Adding Gallery Photos:**
1. Upload images to `images/gallery/`
2. Edit `gallery.html` to add the new image cards

**Need Help?** See `CONTENT_EDIT_GUIDE.md` for detailed instructions with examples.

## 🤝 Contribution
Contributions are welcome! Please open an issue or pull request for suggestions, bug fixes, or improvements.

## 📬 Contact
- **Lab:** AgTech Research Lab, Sejong University
- **Address:** Chungmugwan 502B, 209 Neungdong-ro, Gwangjin-gu, Seoul
- **Email:** agtech@sejong.ac.kr

---

© 2024 AgTech Research Lab. All rights reserved. 