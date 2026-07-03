---
title: Portfel — wallet-core.js
description: Jak używać wallet-core.js — generowanie kluczy, adres ipi i wysyłka nipi w sieci IPI.
---

[`wallet-core.js`](https://github.com/ipicoin/wallet-core.js) to logiczny rdzeń portfela dla
łańcucha IPI (i innych sieci Cosmos). Pakiet buduje na bibliotekach `@cosmjs/*` i udostępnia
zestaw operacji do zarządzania kluczami oraz wysyłania transakcji.

:::caution[Status]
Pakiet jest w fazie **PRE-ALPHA** (`wallet-core@0.4.0`). API może się zmieniać, a część operacji
jest jeszcze w trakcie stabilizacji. Nie używaj z kluczami mainnet o realnej wartości.
:::

## Instalacja i uruchomienie

Repozytorium używa modułów ESM (`.mjs`). Sklonuj i zainstaluj zależności:

```bash
git clone https://github.com/ipicoin/wallet-core.js
cd wallet-core.js
npm install
```

Dostępny jest interaktywny REPL, który udostępnia rdzeń pod globalną nazwą `IPI`:

```bash
npm start   # node src/main.mjs --repl
# (WALLET-CORE::CLI_REPL)> IPI.Operations
```

W kodzie importujesz domyślny eksport, który zawiera `Models` i `Operations`:

```js
import WalletCore from "wallet-core"; // src/index.mjs
const { Models, Operations } = WalletCore;
```

## Generowanie klucza (keygen)

`Operations.generateWalletKey()` tworzy nowy portfel HD z 24-wyrazową frazą mnemonic,
używając ścieżki BIP44 dla `coinType 118` i prefiksu `ipi`:

```js
const wallet = await Operations.generateWalletKey();

const [account] = await wallet.getAccounts();
console.log("Adres IPI:", account.address); // np. ipi1...
```

Pod spodem operacja korzysta z `DirectSecp256k1HdWallet.generate(24, { prefix, hdPaths })`
z pakietu `@cosmjs/proto-signing`.

## Import z frazy mnemonic

Istniejący portfel odtworzysz z frazy:

```js
const wallet = await Operations.importWalletByMnemonic(
  "słowo1 słowo2 ... słowo24"
);
```

## Adres w formacie ipi

Adresy sieci IPI mają format bech32 z prefiksem `ipi` (np. `ipi1abc...`). Adres konta
pobierasz z portfela przez `getAccounts()` — patrz przykład keygen powyżej. Formaty
walidatorów i kluczy publicznych opisuje sekcja
[Parametry sieci](/network/parameters/).

## Wysyłka nipi

`Operations.sendAmount(fromWallet, toAddress, tokenAmount, chainConfig, message?, feeCalc?)`
wysyła środki. Kwoty podaje się w denominacji bazowej `nipi` (`1 IPI = 1e9 nipi`):

```js
const chainConfig = {
  chainId: "ipi-mainnet-2",
  rpc: "https://ipicoin.eu/rpc",
  denom: "nipi",
};

await Operations.sendAmount(
  wallet,                 // portfel nadawcy
  "ipi1odbiorca...",      // adres docelowy
  "1000000000",           // 1 IPI = 1 000 000 000 nipi
  chainConfig,
  "Płatność testowa",     // opcjonalny memo
  "auto"                  // kalkulacja opłaty
);
```

Operacja łączy się z RPC przez `SigningStargateClient` (`@cosmjs/stargate`) i po wykonaniu
zwraca hash transakcji.

## Zobacz też

- [Parametry sieci](/network/parameters/) — chainId, denom, endpointy.
- [Dodanie sieci do Keplr/Leap](/network/parameters/#definicja-dla-portfeli-keplr--leap).
