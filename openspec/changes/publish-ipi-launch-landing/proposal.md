## Why

The repository still exposes the default Starlight starter page instead of the public IPI launch experience. The deployed IPI landing should be captured as the repository's root page so the public source, official branding, countdown, mobile behavior, and social preview have one reviewable source of truth.

## What Changes

- Replace the example Starlight root page with the current English IPI launch landing.
- Preserve the existing Starlight documentation routes.
- Add the official IPI logo and the deterministic August 1, 2026 California-time countdown assets.
- Prevent decorative elements from creating horizontal scrolling on mobile browsers.
- Add a dark 1200×630 Open Graph/X preview using the official IPI logo.
- Keep the previous square social image available for already-cached preview URLs.

### Non-goals

- No changes to DNS, TLS, Cloudflare, email, VPS services, or deployment automation.
- No redesign of IPI Scan, Wallet, Faucet, Status, or the Android terminal.
- No implementation of new chain, NFC, wallet, or checkout functionality.

## Capabilities

### New Capabilities

- `launch-landing`: Covers the IPI root landing, official branding, countdown, responsive containment, navigation links, and social metadata.

### Modified Capabilities

None.

## Impact

- Adds an Astro root page at `src/pages/index.astro`.
- Removes the conflicting example documentation root page.
- Adds static landing, logo, and social-preview assets under `public/`.
- Keeps the existing Astro/Starlight build and documentation routes.
