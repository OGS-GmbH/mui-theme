---
prev: false
next: false
---

# Getting started

## Installation

### Prerequisites

- Node.js version 18 or higher.
- A package manager: e.g. npm, pnpm, ...

::: code-group

```sh [npm]
$ npm add @ogs-gmbh/mui-theme
```

```sh [pnpm]
$ pnpm add @ogs-gmbh/mui-theme
```

```sh [yarn]
$ yarn add @ogs-gmbh/mui-theme
```

```sh [bun]
$ bun add @ogs-gmbh/mui-theme
```

:::

### Usage

`mui-theme` exports dark, light and general theme variants, that can get applied to the [`ThemeProvider`](https://mui.com/material-ui/customization/theming/#theme-provider) Component. Please refer to our [`reference`](/reference) for getting a deeper understanding. Here's an example using [`theme`](/reference/Theme/theme):

```tsx [example-component.tsx]
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@ogs-gmbh/mui-theme";

function Example() {
  return <ThemeProvider theme={theme}>Content goes here ...</ThemeProvider>;
}
```
