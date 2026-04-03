# SCT_WD_1

Responsive Landing Page — SkillCraft

Overview
- A responsive, modern landing page with multiple sections: Home, About, Services, Contact.
- Interactive navigation bar: fixed to the top, changes style on scroll, and shows hover effects.
- Smooth-scrolling anchors and a basic contact form handler (client-side mock).

Files
- `index.html` — main HTML markup
- `style.css` — responsive styles and nav styling
- `script.js` — nav interactions, smooth scroll, form handling

Run locally
1. Open a terminal in the project directory.
2. Start a simple static server (Python 3):

```powershell
python -m http.server 8000
```

3. Open http://localhost:8000 in your browser.

GitHub
- Recommended repository name: `SCT_WD_1`
- Create a new GitHub repo, then add it as the `origin` remote and push:

```powershell
git remote add origin https://github.com/<your-username>/SCT_WD_1.git
git branch -M main
git push -u origin main
```

Notes
- Replace the mock form handling in `script.js` with real backend endpoints when ready.
- Customize copy, branding, and assets to match your project.
