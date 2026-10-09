# Nguyen Minh Toan — Online CV

Static CV page (HTML/CSS/JS, no build step).

## Files
- `index.html` — CV content
- `style.css` — layout, light/dark theme, print (A4 PDF) styles
- `script.js` — theme toggle, "Download PDF", project filter, scroll reveal
- `assets/avatar.jpg` — profile photo

## Deploy to GitHub Pages
```bash
cd cv-site
git init
git add .
git commit -m "Add online CV"
git branch -M main
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main
```
Then on GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.

- Repo named `<username>.github.io` → CV at `https://<username>.github.io/`
- Any other repo name (e.g. `cv`) → `https://<username>.github.io/cv/`

## Export PDF
Open the page → **Download PDF** → choose *Save as PDF*, paper A4, enable *Background graphics*.
