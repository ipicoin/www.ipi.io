---
title: Project status and trust boundaries
description: An evidence map of what IPI currently publishes and what remains to be integrated.
---

IPI publishes a multi-layer architecture across protocol foundations, explorer,
wallet models, RPC clients, governance, and independent-infrastructure research.
Each layer carries its own direct evidence and maturity boundary.

| Area | Current status | Important boundary |
| --- | --- | --- |
| Governance and proposals | Active public bootstrap process | Architecture, security policy, and IPI proposal documents are public; independent maintainership is still being established. |
| Protocol node | Upstream foundation | `independency-daemon` tracks `wasmd`; current IPI changes are provenance and CI hardening, not consensus/application behavior. |
| Network configuration | Tested legacy configuration | Published values are not canonical until bound to a reviewed genesis and reproducible release. |
| Wallet core and mobile wallet | Active development | Eleven wallet model/configuration tests pass; signing, recovery, secure storage, and transaction UX remain incomplete. |
| Explorer | Active testnet interface | Native Cosmos and EVM query paths are implemented; explorer output still depends on configured endpoints. |
| Vote, swap, RPC, and NFT interfaces | Integration sandboxes | These examples retain upstream provenance and do not yet contain IPI network binding. |

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
