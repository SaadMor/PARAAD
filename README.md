# PARAAD

## Frontend setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Available scripts

```bash
npm run build
npm run preview
npm run lint
npm run format
```

## UI verification (lightweight manual step)

1. Start the app with `npm run dev`.
2. Open the local URL shown by Vite (typically `http://localhost:5173`).
3. Capture a screenshot of the rendered page.
4. Compare the screenshot manually with the provided design reference.

### Expected output

- The application loads without runtime errors.
- Layout, spacing, colors, typography, and icon placement match the provided design.
- No obvious overflow, clipping, or alignment issues at default desktop viewport.

### Troubleshooting

- **Port already in use:** run `npm run dev -- --port 4173` and open the new URL.
- **Outdated dependencies / missing packages:** run `npm install` again.
- **Formatting inconsistencies:** run `npm run format`, then re-run `npm run lint`.
- **Design mismatch:** verify browser zoom is 100%, compare at the same viewport size as the design, and re-capture the screenshot.
