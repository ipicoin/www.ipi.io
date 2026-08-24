## Context

The launch instant encoded by the original static page is now in the past. The
root page should be evergreen and should distinguish public services, public
code, and architectural direction without losing the existing visual system.

## Decisions

### Replace the countdown with durable technical positioning

The hero now describes the system in terms of protocol state, open APIs,
self-custody clients, explorer verification, and product/payment boundaries.
It does not depend on a future date.

### Keep live-service claims tied to public URLs

The explorer, wallet gateway, and network-status links remain because the public
URLs are externally observable. Product identity and terminal cards use
architecture/research labels because no IPI-specific public implementation is
present in the audited repositories.

### Remove obsolete runtime code

The countdown script has no remaining behavior once its markup is removed, so
the asset and script reference are deleted instead of leaving stale launch logic
for readers or crawlers to discover.

## Risks

- Removing the countdown reduces launch-event urgency, but replaces it with
  durable technical identity.
- Public service availability can change independently of this static source;
  the network-status link remains the operational authority.
