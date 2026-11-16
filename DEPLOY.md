# Publish to Render (free shareable link)

You do **not** need a custom domain. Render gives you a URL like  
`https://prez-bobel-portfolio.onrender.com`.

## 1. Put the code on GitHub

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `prez-bobel-portfolio` (or any name)
3. Leave it **Public** (easier on the free plan) or Private if you prefer
4. **Do not** add a README / .gitignore / license (this project already has files)
5. Click **Create repository**
6. In Terminal, from this project folder, run the commands GitHub shows under  
   **“…or push an existing repository”** — they look like:

```bash
export PATH="$HOME/.local/node/bin:$PATH"
cd "/Users/prez/Desktop/First Project Cursor"
git remote add origin https://github.com/YOUR_USERNAME/prez-bobel-portfolio.git
git push -u origin main
```

## 2. Deploy on Render

1. Go to [https://render.com](https://render.com) and sign up (GitHub login is easiest)
2. Click **New +** → **Blueprint**
3. Connect the GitHub repo you just pushed
4. Render should read `render.yaml` automatically
5. Click **Apply** / **Deploy**
6. Wait a few minutes for the first build

## 3. Share the link

When the service is **Live**, open it and copy the URL from the Render dashboard  
(e.g. `https://prez-bobel-portfolio.onrender.com`). Send that link to anyone.

### Notes

- Free services on Render may **sleep** after idle time; the first visit can take ~30–60 seconds to wake up.
- Your `.env` and LinkedIn PDF are **not** included in git (kept private on your machine).
- After you change the site later: `git add -A && git commit -m "Update site" && git push` — Render redeploys automatically.
