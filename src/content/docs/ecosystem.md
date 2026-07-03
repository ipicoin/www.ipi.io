---
title: Ekosystem
description: Przegląd repozytoriów i aplikacji federacji IPI DAO — Ivote, Iswap, ipi-nft, protocolix, cheers-protocol i inne.
---

Ekosystem IPI to zbiór współpracujących, otwartoźródłowych repozytoriów w organizacji
[`ipicoin`](https://github.com/ipicoin) na GitHubie. Poniżej najważniejsze komponenty
federacji DAO.

:::note[Status]
Większość komponentów jest w fazie PRE-ALPHA / wczesnego rozwoju.
:::

## Rdzeń łańcucha

| Repozytorium | Opis |
| :-- | :-- |
| [independency-daemon](https://github.com/ipicoin/independency-daemon) | Węzeł łańcucha — fork Cosmos SDK + CosmWasm, następca `ipid`. |
| [chainconfig](https://github.com/ipicoin/chainconfig) | Kanoniczna konfiguracja łańcucha (SSOT) jako rozbite drzewo. |
| [chain-registry](https://github.com/ipicoin/chain-registry) | Oficjalny wpis sieci w rejestrze chainów Cosmos. |
| [ipi-rpc](https://github.com/ipicoin/ipi-rpc) | Bramka web RPC dla sieci IPI. |
| [cw-template](https://github.com/ipicoin/cw-template) | Szablon startowy kontraktów CosmWasm. |

## Portfele i tożsamość

| Repozytorium | Opis |
| :-- | :-- |
| [wallet-core.js](https://github.com/ipicoin/wallet-core.js) | Rdzeń logiki portfela w JS (keygen, adres `ipi`, wysyłka `nipi`). |
| [protocolix](https://github.com/ipicoin/protocolix) | Aplikacja mobilna DAO (Android/iOS) do obsługi portfela i systemów federacji. |

## Aplikacje DAO

| Repozytorium | Opis |
| :-- | :-- |
| [Ivote](https://github.com/ipicoin/Ivote) | Aplikacja do głosowań i propozycji (governance) w IPI DAO. |
| [Iswap](https://github.com/ipicoin/Iswap) | Aplikacja do wymiany (swap) tokenów w IPI DAO. |
| [ipi-nft](https://github.com/ipicoin/ipi-nft) | Łańcuchowa implementacja NFT w ramach IPI DAO. |

## Cheers Protocol (płatności / RFID)

| Repozytorium | Opis |
| :-- | :-- |
| [cheers-protocol](https://github.com/ipicoin/cheers-protocol) | Fizyczne karty z chipem RFID (inspiracja 3DS) — prepaidowe portfele eventowe dla członków federacji. |
| [cheer-gear](https://github.com/ipicoin/cheer-gear) | Terminal płatniczy DIY („Cheers protocol") z modułów elektronicznych i oprogramowania open source. |

## Infrastruktura wspólna

| Repozytorium | Opis |
| :-- | :-- |
| [hq-spacecraft](https://github.com/ipicoin/hq-spacecraft) | Orkiestrowane, wspólne środowisko usług dla sfederowanych organizacji; IPI jako nośnik stabilizacji konsensusu. |
| [universal-independency-declaration](https://github.com/ipicoin/universal-independency-declaration) | Manifest łańcucha, deklaracja federacji DAO, konfiguracja i informacje o projekcie. |
| [standard_repo_template](https://github.com/ipicoin/standard_repo_template) | Wzorcowy szablon repozytoriów IPI (procedury B.O.S., wersjonowanie GRIH, wspólne pliki). |
| [www.ipi.io](https://github.com/ipicoin/www.ipi.io) | Strona domowa i dokumentacja (Astro/Starlight) — to repozytorium. |

Pełna lista znajduje się w organizacji [github.com/ipicoin](https://github.com/ipicoin).
