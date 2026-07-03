---
title: Parametry sieci
description: Kanoniczne parametry sieci IPI (chainId, denom, prefix, coinType, endpointy) zgodne z konfiguracją SSOT.
---

Poniższe wartości stanowią **jedno źródło prawdy (SSOT)** dla konfiguracji łańcucha IPI.
Źródłem kanonicznym jest repozytorium
[`chainconfig`](https://github.com/ipicoin/chainconfig) oraz strona dodawania sieci
([`wallet.html`](https://www.ipi.io/wallet.html)).

## Podstawowe parametry

| Parametr | Wartość |
| :-- | :-- |
| Chain ID | `ipi-mainnet-2` |
| Nazwa sieci | IPI |
| Token (display) | `IPI` |
| Denominacja bazowa | `nipi` |
| Liczba miejsc dziesiętnych | `9` |
| Prefiks Bech32 (konto) | `ipi` |
| Coin type (BIP44) | `118` |

## Endpointy

| Usługa | URL |
| :-- | :-- |
| RPC | `https://ipicoin.eu/rpc` |
| REST (API) | `https://ipicoin.eu/api` |
| Explorer | `https://explorer.ipicoin.eu/` |
| Full node (Linux AMD64) | `https://ipicoin.eu/downloads/ipid-linux-amd64` |

## Konfiguracja Bech32

| Klucz | Wartość |
| :-- | :-- |
| `bech32PrefixAccAddr` | `ipi` |
| `bech32PrefixAccPub` | `ipipub` |
| `bech32PrefixValAddr` | `ipivaloper` |
| `bech32PrefixValPub` | `ipivaloperpub` |
| `bech32PrefixConsAddr` | `ipivalcons` |
| `bech32PrefixConsPub` | `ipivalconspub` |

## Definicja dla portfeli (Keplr / Leap)

Sieć można dodać do zgodnych portfeli za pomocą metody `experimentalSuggestChain`.
Minimalny obiekt konfiguracyjny:

```js
const ipiChain = {
  chainId: "ipi-mainnet-2",
  chainName: "IPI",
  rpc: "https://ipicoin.eu/rpc",
  rest: "https://ipicoin.eu/api",
  bip44: { coinType: 118 },
  bech32Config: {
    bech32PrefixAccAddr: "ipi",
    bech32PrefixAccPub: "ipipub",
    bech32PrefixValAddr: "ipivaloper",
    bech32PrefixValPub: "ipivaloperpub",
    bech32PrefixConsAddr: "ipivalcons",
    bech32PrefixConsPub: "ipivalconspub",
  },
  currencies: [
    { coinDenom: "IPI", coinMinimalDenom: "nipi", coinDecimals: 9 },
  ],
  feeCurrencies: [
    { coinDenom: "IPI", coinMinimalDenom: "nipi", coinDecimals: 9 },
  ],
  stakeCurrency: {
    coinDenom: "IPI",
    coinMinimalDenom: "nipi",
    coinDecimals: 9,
  },
};

await window.keplr.experimentalSuggestChain(ipiChain);
await window.keplr.enable("ipi-mainnet-2");
```

:::note[Przeliczanie jednostek]
`1 IPI = 1 000 000 000 nipi` (9 miejsc po przecinku). Kwoty w transakcjach podaje się
zawsze w denominacji bazowej `nipi`.
:::
