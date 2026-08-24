# IPI Website

Official source for the IPI launch landing and public documentation at `www.ipi.io`.

## What this repository delivers

- the public IPI landing at `/`;
- direct navigation to the explorer, wallet gateway, and network status;
- an evidence-aligned overview of the protocol, wallet, product-identity, and
  checkout architecture;
- Starlight documentation routes; and
- versioned brand and social-preview assets.

## OpenSpec starts here

OpenSpec is initialized in [`openspec/`](openspec/). The first change is:

- [`publish-ipi-launch-landing`](openspec/changes/publish-ipi-launch-landing/) — publishes the verified English IPI launch landing at `/`, including the official logo, California countdown, mobile overflow fix, service navigation, and branded social preview.
- [`replace-expired-launch-countdown`](openspec/changes/replace-expired-launch-countdown/) — removes the completed launch countdown and aligns capability labels with public engineering evidence.

Useful commands:

```sh
openspec list
openspec status --change publish-ipi-launch-landing
openspec validate publish-ipi-launch-landing --strict
```

OpenSpec 1.6.0 was used with the `spec-driven` schema. Its current installation instructions and workflow are maintained at [OpenSpec](https://github.com/Fission-AI/OpenSpec).

## Project structure

```text
.
├── openspec/                    # Specifications and change artifacts
├── public/                      # Landing CSS, JavaScript, logo and social assets
├── src/pages/index.astro        # Public IPI launch landing
├── src/content/docs/            # Starlight documentation routes
├── astro.config.mjs
└── package.json
```

## Development

Prerequisite: Node.js 22.12 or newer.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

The Astro production build is written to `dist/`.

## Development status

**Active development.** The website presents public services and intended system
boundaries; it is not evidence by itself that every referenced protocol, wallet,
hardware, identity, or checkout layer is implemented or production-ready.

## License

Source code and documentation in this repository are licensed under
[Apache License 2.0](LICENSE). IPI names and marks are governed separately by
the organization [trademark policy](https://github.com/ipicoin/.github/blob/main/TRADEMARKS.md).
