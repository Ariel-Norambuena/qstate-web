# QState website

Official website of the QState research group at Universidad Técnica Federico
Santa María.

## Local development

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run lint
npm run build
```

## Visitor analytics

The site supports Google Analytics 4 without hard-coding account credentials.
Create a GA4 web data stream for `https://qstate.cl`, then add its measurement
ID as the GitHub Actions repository variable `VITE_GA_MEASUREMENT_ID`.

For local testing, copy `.env.example` to `.env.local` and replace the sample
value. Analytics remains disabled when the variable is absent.

## Deployment

Every push to `main` is built and deployed to GitHub Pages by
`.github/workflows/deploy.yml`. The custom domain is stored in `public/CNAME`.
