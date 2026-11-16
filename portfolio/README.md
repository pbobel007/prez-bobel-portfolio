# Prez Bobel — Portfolio Site

Enterprise-meets-edgy personal site built with NestJS. Content is sourced from your LinkedIn profile.

## Run locally

```bash
export PATH="$HOME/.local/node/bin:$PATH"
cd portfolio
npm run start:dev
```

Open **http://localhost:3000**

From the project root you can also run:

```bash
export PATH="$HOME/.local/node/bin:$PATH"
npm start
```

## What’s included

- **About** — summary, credentials, languages, focus areas
- **Career journey** — timeline from TELUS GELP through Shared Services Canada
- **Portfolio** — selected programs (M365, IPA, Rogers, TELUS regulatory), hydrated from the API
- **Contact** — email + LinkedIn

## Languages

Use the **EN / PL / ES** switcher in the header (also in the mobile menu). Preference is saved in `localStorage`.

## API

- `GET /api/profile?lang=en|pl|es` — localized UI + profile content (SAP, journey, portfolio)
- `GET /api/locales` — supported language codes
