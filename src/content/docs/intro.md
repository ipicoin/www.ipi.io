---
title: Czym jest IPI
description: Wprowadzenie do Independent Protocol Infrastructure — architektura Cosmos SDK + CosmWasm i federacja DAO.
---

**IPI (Independent Protocol Infrastructure)** to niezależna infrastruktura protokołów zbudowana wokół
suwerennego łańcucha bloków w ekosystemie Cosmos. Celem projektu jest dostarczenie
zdecentralizowanej, federacyjnej podstawy technicznej dla organizacji i społeczności działających
jako federacja DAO — z własną tożsamością, konsensusem i zestawem aplikacji.

:::caution[Status]
Projekt jest we wczesnej fazie rozwoju (PRE-ALPHA). Parametry i interfejsy mogą się zmieniać.
Repozytoria są publikowane w duchu transparentności prac.
:::

## Architektura

IPI opiera się na dwóch filarach technologicznych ekosystemu Cosmos:

- **Cosmos SDK** — modułowy framework do budowy suwerennych łańcuchów typu proof-of-stake.
  Warstwa aplikacyjna łańcucha IPI jest dostarczana przez demona
  [`independency-daemon`](https://github.com/ipicoin/independency-daemon) — fork bazowej
  aplikacji Cosmos SDK, docelowo zastępujący wcześniejszy propagator węzła `ipid`.
- **CosmWasm** — silnik inteligentnych kontraktów w WebAssembly, pozwalający uruchamiać
  bezpieczny, przenośny kod kontraktów na łańcuchu IPI (szablony w
  [`cw-template`](https://github.com/ipicoin/cw-template)).

Sieć posługuje się natywnym tokenem **IPI** (denominacja bazowa `nipi`, 9 miejsc po przecinku),
adresami w formacie bech32 z prefiksem `ipi` oraz standardem derywacji kluczy `coinType 118`,
dzięki czemu jest kompatybilna z portfelami Keplr i Leap. Szczegóły w sekcji
[Parametry sieci](/network/parameters/).

## Federacja DAO

IPI jest pomyślane jako **federacja niezależnych organizacji DAO**, które łączy wspólny łańcuch
konsensusu pełniący rolę stabilizatora i nośnika zaufania między różnorodnymi podmiotami.
Zamiast jednej scentralizowanej struktury, ekosystem tworzą współpracujące, autonomiczne jednostki,
korzystające ze wspólnych usług open source (m.in. orkiestracja w
[`hq-spacecraft`](https://github.com/ipicoin/hq-spacecraft)).

Ramy federacji, manifest łańcucha i deklaracja niezależności opisane są w repozytorium
[`universal-independency-declaration`](https://github.com/ipicoin/universal-independency-declaration).

## Dalej

- [Parametry sieci](/network/parameters/) — pełna konfiguracja SSOT (chainId, denom, endpointy).
- [Portfel: wallet-core.js](/guides/wallet/) — generowanie kluczy, adres `ipi`, wysyłka `nipi`.
- [Uruchomienie węzła / devnetu](/guides/run-node/) — `independency-daemon`.
- [Ekosystem](/ecosystem/) — przegląd aplikacji i repozytoriów federacji.
