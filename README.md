# Vishal Portfolio
made with love 
A premium dark-themed, fully customizable frontend portfolio.

## Project Structure

```
vishalportfolio/
├── index.html              ← Main HTML entry point
├── README.md               ← You are here
│
├── css/
│   ├── reset.css           ← CSS reset & scrollbar
│   ├── variables.css       ← Design tokens (colors, fonts, spacing)
│   ├── base.css            ← Base styles, shared buttons, modal
│   ├── nav.css             ← Navigation bar
│   ├── hero.css            ← Hero section
│   ├── about.css           ← About section + timeline
│   ├── skills.css          ← Skills cards + progress bars
│   ├── projects.css        ← Project cards + filter
│   ├── github.css          ← GitHub repo cards
│   ├── contact.css         ← Contact form + info
│   ├── footer.css          ← Footer
│   ├── editor.css          ← Live editor panel
│   └── animations.css      ← Keyframes + scroll reveal
│
└── js/
    ├── data.js             ← All portfolio content/data (edit this!)
    ├── render.js           ← Renders portfolio from data
    ├── editor.js           ← Live editor panel logic
    ├── cursor.js           ← Custom animated cursor
    ├── animations.js       ← Scroll reveal + skill bars + nav
    └── main.js             ← App entry point (DOMContentLoaded)
```

## How to Use

### 1. Edit Your Content
Open `js/data.js` and update all the fields with your real info:
- Name, role, bio, stats
- About paragraphs, tech badges, timeline
- Skills with proficiency levels
- Projects with demo & GitHub URLs
- GitHub repos
- Contact info (email, LinkedIn, location)

### 2. Run Locally
Just open `index.html` in any browser — no build step needed!

### 3. Use the Live Editor
Click the ** Edit Portfolio** button (bottom-right corner) to edit everything visually in real-time directly in the browser.

### 4. Deploy
| Platform | Steps |
|----------|-------|
| **Vercel** | Drag the folder to vercel.com |
| **Netlify** | Drag the folder to netlify.com/drop |
| **GitHub Pages** | Push to GitHub repo → Settings → Pages |

## Customization Tips

 **Colors**: Edit `css/variables.css` — change `--accent`, `--bg`, `--text` etc.
**Fonts**: Change the Google Fonts import in `index.html` and update `--font-display` / `--font-body` in `variables.css`
**Add sections**: Add HTML in `index.html`, a new CSS file in `css/`, and link it
 **Profile photo**: Replace the initials in hero with an `<img>` tag

## Tech Stack
 Vanilla HTML, CSS, JavaScript
Google Fonts (Syne + DM Sans)
No frameworks, no build tools, no dependencies
# Portfolio_Web-App
