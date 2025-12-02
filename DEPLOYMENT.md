# GitHub Deployment Guide

## Step 1: Create a GitHub Account (if you don't have one)
1. Go to https://github.com
2. Click "Sign up" and follow the instructions

## Step 2: Create a New Repository

1. Click the "+" icon in the top right corner
2. Select "New repository"
3. Fill in the details:
   - Repository name: `pooja-list-creator` (or any name you prefer)
   - Description: "Web app for creating and managing pooja item lists"
   - Select "Public" (required for GitHub Pages)
   - DO NOT initialize with README (we already have one)
4. Click "Create repository"

## Step 3: Upload Files to GitHub

### Option A: Using GitHub Web Interface (Easiest)

1. On your new repository page, click "uploading an existing file"
2. Drag and drop these files:
   - index.html
   - style.css
   - script.js
   - items.json
   - README.md
3. Add commit message: "Initial commit"
4. Click "Commit changes"

### Option B: Using Git Command Line

1. Open PowerShell in your project folder
2. Run these commands:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Pooja List Creator"

# Add your GitHub repository as remote (replace with your username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/pooja-list-creator.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Click "Pages" in the left sidebar
4. Under "Source":
   - Select branch: "main"
   - Select folder: "/ (root)"
5. Click "Save"
6. Wait a few minutes for deployment
7. Your site will be live at: `https://YOUR_USERNAME.github.io/pooja-list-creator/`

## Step 5: Update README.md

1. Edit README.md on GitHub
2. Replace `https://yourusername.github.io/listCreator/` with your actual URL
3. Commit the changes

## Step 6: Test Your Hosted App

1. Visit your GitHub Pages URL
2. Test all features:
   - Create new list
   - Add/edit items
   - Upload logo
   - Edit header
   - Save list
   - Export to PDF
   - Share to WhatsApp

## Troubleshooting

### Issue: Files not loading properly
- Make sure all files are in the root directory (not in subfolders)
- Check that file names are exactly: `index.html`, `style.css`, `script.js`, `items.json`

### Issue: GitHub Pages not working
- Ensure repository is "Public"
- Wait 5-10 minutes after enabling Pages
- Check Settings → Pages for any error messages
- Clear browser cache and try again

### Issue: Images/Logo not appearing
- This is normal for first-time users
- Images are stored in browser's local storage
- Users need to upload their own logos

## Updating Your App

To make changes after initial deployment:

1. Edit files locally
2. Go to your repository on GitHub
3. Click on the file you want to edit
4. Click the pencil icon (Edit)
5. Make your changes
6. Commit changes at the bottom
7. Changes will be live in 1-2 minutes

Or use Git:
```powershell
git add .
git commit -m "Description of changes"
git push
```

## Sharing Your App

Share this URL with others:
`https://YOUR_USERNAME.github.io/pooja-list-creator/`

Users can:
- Access it from any device with a browser
- Save it as a bookmark
- Add to home screen on mobile devices
- Use it offline after first load (cached in browser)

## Custom Domain (Optional)

To use your own domain:
1. Buy a domain from any registrar
2. In GitHub Settings → Pages, add your custom domain
3. Configure DNS settings at your registrar
4. Follow GitHub's instructions for DNS setup

---

Need help? Check GitHub's official documentation:
https://docs.github.com/en/pages
