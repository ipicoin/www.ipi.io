## ADDED Requirements

### Requirement: IPI launch landing owns the root route
The website SHALL render the English IPI launch landing at `/` while retaining the existing documentation routes.

#### Scenario: Visitor opens the root route
- **WHEN** a visitor opens `/`
- **THEN** the website displays the IPI launch landing instead of the Starlight starter page

#### Scenario: Visitor opens existing documentation
- **WHEN** a visitor opens an existing guide or reference route
- **THEN** the corresponding Starlight documentation page remains available

### Requirement: Official IPI branding
The landing SHALL use the official IPI logo and the name IPI without substituting an invented mark.

#### Scenario: Landing branding is rendered
- **WHEN** the landing header and social card are rendered
- **THEN** both use the repository's official IPI logo asset

### Requirement: Deterministic California countdown
The landing SHALL count down to August 1, 2026 at 12:00 AM California time using the explicit PDT offset `-07:00`.

#### Scenario: Countdown is viewed in another timezone
- **WHEN** a visitor opens the landing outside California
- **THEN** the countdown targets the same global launch instant as a visitor in California

#### Scenario: Countdown reaches zero
- **WHEN** the launch instant is reached
- **THEN** the displayed remaining time is zero and the page announces that the reveal is available

### Requirement: Live IPI service navigation
The landing SHALL provide direct links to IPI Scan, IPI Wallet, and IPI Network Status.

#### Scenario: Visitor follows a service link
- **WHEN** a visitor activates a service navigation link
- **THEN** the browser opens the corresponding public IPI service URL

### Requirement: Mobile layout remains within the viewport
The landing SHALL NOT create horizontal document overflow on mobile viewports.

#### Scenario: Decorative orbit renders on mobile
- **WHEN** the viewport width is 680 pixels or less
- **THEN** the orbit is contained by the hero and the document width does not exceed the viewport width

### Requirement: Social previews use the branded landscape card
The landing SHALL expose Open Graph and X metadata for a 1200×630 PNG containing the official IPI logo on the dark IPI landing background.

#### Scenario: Social crawler reads the landing
- **WHEN** a crawler requests the root page
- **THEN** the response includes absolute image metadata, PNG content type, 1200×630 dimensions, alt text, and a large-image card declaration

#### Scenario: Social crawler requests the preview image
- **WHEN** the crawler requests the declared image URL
- **THEN** the server can return the 1200×630 PNG without authentication

### Requirement: Reduced-motion preference is respected
The landing SHALL minimize animations and transitions when the visitor requests reduced motion.

#### Scenario: Visitor enables reduced motion
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** decorative animations and transitions run with effectively zero duration
