## Context

`ipicoin/www.ipi.io` is an Astro 6 project with Starlight documentation routes. Its root route is still the generated Starlight starter page, while the public IPI landing has already been developed and deployed separately. This change makes the deployed landing the repository-owned root without discarding the documentation framework.

The landing is intentionally static. It needs no backend, persistence, authentication, or runtime configuration. Astro 6 requires Node.js 22.12 or newer for the build used by this repository.

## Goals / Non-Goals

**Goals:**

- Reproduce the current IPI launch landing at `/` from repository source.
- Preserve the existing documentation pages and Astro/Starlight build.
- Keep the official logo and social card as versioned static assets.
- Make the countdown deterministic for every visitor.
- Prevent mobile decoration from increasing the document width.

**Non-Goals:**

- Deploy or reconfigure production infrastructure.
- Change IPI service applications or public DNS.
- Add analytics, remote APIs, accounts, or new product features.

## Decisions

### Use a dedicated Astro page for `/`

`src/pages/index.astro` owns the root route, while Starlight continues to generate the remaining documentation routes. The example `src/content/docs/index.mdx` is removed because it would generate a conflicting root route.

Alternative considered: restyle the Starlight splash page. This was rejected because it would couple the public landing to the documentation shell and would not preserve the already verified landing markup and behavior.

### Keep landing resources in `public/`

The verified CSS, JavaScript, official SVG logo, and social images are copied as static assets. The page references stable root-relative paths, matching production behavior and keeping the countdown independent of Astro client bundling.

Alternative considered: convert every asset to imported Astro modules. This was rejected because it would change generated URLs and add migration risk without improving this static page.

### Encode the launch instant with an explicit offset

The countdown uses `2026-08-01T00:00:00-07:00`, representing midnight in California during PDT. Every browser therefore counts down to one global instant rather than interpreting a local date.

### Contain mobile decoration at the hero boundary

On mobile, the decorative orbit is clipped by the hero and root horizontal overscroll is disabled. This removes the off-canvas width while preserving the visible portion of the decoration.

### Use a landscape social card

Open Graph and X metadata reference a 1200×630 PNG with the official IPI logo on the established dark landing background. A version query is part of the URL so social crawlers can distinguish revisions. The older square JPG remains available for already-cached references.

## Risks / Trade-offs

- **Social platforms cache previews independently** → Version the image URL and provide complete Open Graph metadata; cache refresh timing remains controlled by each platform.
- **Astro and OpenSpec require a newer Node version than the machine default** → Document and verify with Node.js 22.12 or newer without changing the system installation.
- **Static assets are not fingerprinted by Astro** → Use explicit version queries for assets that require cache invalidation.
- **Two presentation systems share one repository** → Keep the landing isolated to `src/pages/index.astro` and leave documentation routes under Starlight.

## Migration Plan

1. Add the Astro root page and public landing assets.
2. Remove only the conflicting example documentation root.
3. Run a clean Astro build with Node.js 22.12 or newer.
4. Verify the generated root HTML, documentation routes, official logo, countdown assets, and social metadata.
5. Roll back by restoring the previous root MDX file and removing the dedicated root page/assets if the change is rejected.

## Open Questions

None for this isolated landing publication.
