# Bastion Secure

Cybersecurity services website. React 18 + Vite + Tailwind CSS 3.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Structure
```
index.html              page shell + fonts
src/main.jsx            React entry
src/index.css           Tailwind + theme variables (light/dark)
src/App.jsx             page sections
src/data.js             nav, services, plans, sample feed
src/hooks/useFeed.js    API call (CISA Known Exploited Vulnerabilities)
src/components/         Header, Dropdown, Feed, AuthForm, Modal
```

## Git and GitHub
```bash
git init
git add .
git commit -m "Initial commit: Bastion Secure site"
git branch -M main
# create an empty repo on github.com first, then:
git remote add origin https://github.com/<your-username>/bastion-secure.git
git push -u origin main
```
Work on features in branches: `git checkout -b feature/pricing`, commit, push, open a pull request.

## Testing checklist
Check in browser DevTools (device toolbar) at 375px, 768px and 1280px: dropdown menu, mobile menu, login/register validation, feed search and filter, dark mode.
