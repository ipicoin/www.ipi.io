## MODIFIED Requirements

### Requirement: IPI landing owns the root route
The website SHALL render an evergreen English IPI infrastructure landing at `/`
while retaining the existing documentation routes.

#### Scenario: Visitor opens the root route
- **WHEN** a visitor opens `/`
- **THEN** the website presents IPI as a multi-layer protocol infrastructure system and provides direct access to public evidence and services

### Requirement: Capability maturity is evidence-aligned
The landing SHALL distinguish public services and code from integration
directions and research boundaries.

#### Scenario: Visitor reviews the architecture cards
- **WHEN** a visitor reads the terminal, product-identity, wallet, and chain cards
- **THEN** each card uses a status supported by public source or an externally observable public endpoint

### Requirement: Live IPI service navigation
The landing SHALL provide direct links to IPI Scan, IPI Wallet, and IPI Network
Status without treating those hosted services as proof that every architecture
layer is publicly implemented.

#### Scenario: Visitor follows a service link
- **WHEN** a visitor activates a service navigation link
- **THEN** the browser opens the corresponding public IPI service URL

## REMOVED Requirements

### Requirement: Deterministic California countdown
**Reason:** The August 1, 2026 launch instant has passed, so a countdown is no
longer part of the current landing behavior.

**Migration:** Remove the launch-date markup, countdown UI, runtime script, and
future-tense reveal copy. Preserve the service navigation and branded landing.
