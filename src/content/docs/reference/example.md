---
title: Project status and trust boundaries
description: A conservative map of what IPI currently publishes and what remains unverified.
---

IPI does not use public visibility as a substitute for production readiness.
Each repository must state its own maturity and verification evidence.

| Area | Current status | Important boundary |
| --- | --- | --- |
| Governance and proposals | Active bootstrap process | Independent maintainers and proposal editors are still being established. |
| Protocol node | Research base | `independency-daemon` is currently an unmodified wasmd tracking fork, not an IPI node release. |
| Network configuration | Legacy and unverified | Published values are not canonical until bound to a reviewed genesis and reproducible release. |
| Wallet core and mobile wallet | Pre-alpha | Key handling, recovery, release signing, and transaction UX are not production-audited. |
| Explorer | Incubating testnet interface | Explorer output depends on configured endpoints and is not independent verification by itself. |
| Vote, swap, RPC, and NFT interfaces | Inherited prototypes | These examples retain upstream provenance and must not be used with assets of value. |

## Evidence required for stronger claims

A production network claim requires at least:

- a reviewed protocol specification and threat model;
- a reproducible node build tied to a precise source revision;
- signed release artifacts and verified genesis identity;
- public upgrade, migration, rollback, and recovery procedures;
- independently operated nodes and independently reproduced results;
- security review appropriate to consensus, custody, wallet, and bridge risks;
  and
- a maintenance and governance structure that does not depend on one account,
  company, infrastructure provider, or unpublished process.

The authoritative maturity criteria are maintained in the project
[roadmap](https://github.com/ipicoin/.github/blob/main/ROADMAP.md).
