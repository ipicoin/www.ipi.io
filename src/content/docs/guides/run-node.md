---
title: Uruchomienie węzła / devnet
description: Jak postawić węzeł lub devnet IPI w oparciu o independency-daemon.
---

Węzeł sieci IPI dostarcza [`independency-daemon`](https://github.com/ipicoin/independency-daemon) —
fork bazowej aplikacji Cosmos SDK z obsługą inteligentnych kontraktów WebAssembly (CosmWasm),
zastępujący wcześniejszy propagator węzła `ipid`. Ten komponent powstał w ramach **Fali 1**
prac nad infrastrukturą.

:::caution[Status]
Oprogramowanie jest we wczesnej fazie rozwoju. Parametry startowe (`chain-id`, genesis, seedy)
mogą się zmieniać. Traktuj poniższe kroki jako szkielet devnetu.
:::

## Szybki start — gotowy binarny full node

Najprostsza droga do uruchomienia pełnego węzła to pobranie gotowego pliku binarnego:

```bash
curl -L -o ipid https://ipicoin.eu/downloads/ipid-linux-amd64
chmod +x ipid
./ipid version
```

## Budowa ze źródeł

```bash
git clone https://github.com/ipicoin/independency-daemon
cd independency-daemon
make install        # lub: go build -o ipid ./cmd/...
ipid version
```

## Inicjalizacja lokalnego devnetu

```bash
# 1. Inicjalizacja katalogu węzła (devnet ma własny chain-id, nie mainnet)
ipid init moj-node --chain-id ipi-devnet-1

# 2. Utworzenie klucza walidatora (prefiks adresu: ipi)
ipid keys add validator

# 3. Konto w genesis z saldem w denominacji bazowej nipi
ipid genesis add-genesis-account validator 100000000000nipi

# 4. Transakcja gentx (stake w nipi)
ipid genesis gentx validator 1000000000nipi --chain-id ipi-devnet-1
ipid genesis collect-gentxs

# 5. Start węzła
ipid start
```

Po starcie węzeł wystawia standardowe porty Cosmos:

- **RPC** — `26657` (publiczny mainnet: `https://ipicoin.eu/rpc`)
- **REST/API** — `1317` (publiczny mainnet: `https://ipicoin.eu/api`)

## Dołączenie do sieci

Aby dołączyć do istniejącej sieci zamiast tworzyć własną, użyj oficjalnego pliku `genesis.json`
oraz seedów/persistent peers z repozytorium
[`chainconfig`](https://github.com/ipicoin/chainconfig), a następnie zsynchronizuj węzeł
(`ipid start`). Parametry sieci znajdziesz w sekcji [Parametry sieci](/network/parameters/).

## Kontrakty CosmWasm

Do pisania i wdrażania inteligentnych kontraktów wykorzystaj szablon
[`cw-template`](https://github.com/ipicoin/cw-template) (fork `CosmWasm/cw-template`).
