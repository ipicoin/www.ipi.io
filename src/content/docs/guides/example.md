---
title: Getting started with IPI
description: Understand the project, verify its current maturity, and make a useful first contribution.
---

IPI is building open infrastructure for systems that can be independently
operated, verified, and extended. The project is early: public repositories
include active code, migrations, experiments, and attributed upstream forks.

## Understand the standard

Start with these public sources of truth:

1. read the [IPI project overview](https://github.com/ipicoin/.github/tree/main/profile);
2. review the [target architecture](https://github.com/ipicoin/.github/blob/main/ARCHITECTURE.md)
   and its explicit trust boundaries;
3. check the [roadmap and exit criteria](https://github.com/ipicoin/.github/blob/main/ROADMAP.md);
4. read [IPI-0001: Verifiable Independence](https://github.com/ipicoin/.github/blob/main/ipi/IPI-0001.md);
   and
5. confirm the maturity statement in the repository you intend to use.

Fast finality is not proof of independence. An endpoint response also does not
prove who operates the endpoint or whether the returned state was independently
verified. Treat every claim as a question that should have reproducible public
evidence.

## Choose a contribution

Browse issues marked
[good first issue](https://github.com/search?q=org%3Aipicoin+label%3A%22good+first+issue%22+is%3Aopen&type=issues)
or [help wanted](https://github.com/search?q=org%3Aipicoin+label%3A%22help+wanted%22+is%3Aopen&type=issues).
Before writing code, read the organization
[contribution guide](https://github.com/ipicoin/.github/blob/main/CONTRIBUTING.md)
and the target repository README.

Good contributions make one claim easier for an unrelated person to reproduce.
Include the environment, inputs, expected result, actual result, limitations,
and commands needed to verify your change.

## Discuss or report

Use [GitHub Discussions](https://github.com/ipicoin/.github/discussions) for
architecture and usage questions. Report ordinary defects in the relevant
repository. Report vulnerabilities privately through the
[security policy](https://github.com/ipicoin/.github/blob/main/SECURITY.md).
