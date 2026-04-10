> _We're OGS, check out our work on [github.com/ogs-gmbh](https://github.com/ogs-gmbh)_

# MUI Theme

*Pre-configured Material-UI theme with light, dark and color scheme support.*

![Preview](./docs/preview.avif)

<a href="./LICENSE" target="_blank"><img src="https://img.shields.io/github/license/OGS-GmbH/mui-theme?color=0f434e&logo=hackthebox&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://github.com/OGS-GmbH/mui-theme/actions/workflows/main-trusted-deploy.yml" target="_blank"><img src="https://img.shields.io/github/actions/workflow/status/OGS-GmbH/mui-theme/main-trusted-deploy.yml?color=0f434e&logo=rocket&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://www.npmjs.com/package/@ogs-gmbh/mui-theme" target="_blank"><img src="https://img.shields.io/npm/v/%40ogs-gmbh%2Fmui-theme?color=0f434e&logo=npm&logoColor=000000&labelColor=ffffff" /></a>

- **Light & Dark Mode**\
  Pre-configured light and dark color schemes with automatic switching support.

- **Custom Color Palettes**\
  Carefully crafted color palettes including petrol, orange, blue, gray, yellow and red tones.

- **Component Defaults**\
  Optimized default props for MUI components like buttons, text fields and tooltips.

- **Typography System**\
  Consistent typography configuration with custom font family support.

## Getting Started

> [!IMPORTANT]
> We're offering an extensive API-Reference covered with in-depth usage examples of this project.

To get a starting point, simply refer to our documentation at [ogs-gmbh.github.io/mui-theme](https://ogs-gmbh.github.io/mui-theme).

### Prerequisites

- Node.js version 18 or higher
- A package manager: e.g. npm, pnpm, ...

### Installation

Using npm:
```sh
$ npm install @ogs-gmbh/mui-theme
```

<details>
  <summary>Using a different package managers?</summary>
  <br/>
  
  Using yarn:
  ```sh
  $ pnpm add @ogs-gmbh/mui-theme
  ```
  
  Using pnpm:
  ```sh
  $ pnpm add @ogs-gmbh/mui-theme
  ```
  
  Using bun:
  ```sh
  $ bun add @ogs-gmbh/mui-theme
  ```

</details>

### Usage

`mui-theme` exports dark, light and general theme variants, that can get applied to the [`ThemeProvider`](https://mui.com/material-ui/customization/theming/#theme-provider) Component. Please refer to our [`reference`](https://ogs-gmbh.github.io/mui-theme/reference) for getting a deeper understanding. Here's an example using [`theme`](https://ogs-gmbh.github.io/mui-theme/reference/Theme/theme):

```tsx
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@ogs-gmbh/mui-theme";

function Example() {
  return <ThemeProvider theme={theme}>Content goes here ...</ThemeProvider>;
}
```

## License

The MIT License (MIT) - Please have a look at the [LICENSE file](./LICENSE) for more details.

## Contributing

Contributions are always welcome and greatly appreciated. Whether you want to report a bug, suggest a new feature, or improve the documentation, your input helps make the project better for everyone.

Feel free to submit a pull request, issue or feature request.

### Issues and Feature Requests

Reporting an issue or creating a feature request is made by creating a new issue on this repository.

You can create a [new issue or feature request here](../../issues/new/choose).

### Pull Requests

GitHub offers a solid guideline for contributing to open source projects through pull requests, covering key practices. These best practices provide a reliable starting point for making effective contributions.

You can find the [guidelines here](https://docs.github.com/get-started/exploring-projects-on-github/contributing-to-a-project).

### Code Of Conduct

We are committed to keeping a welcoming, inclusive, and respectful community for everyone. To help us achieve this, we kindly ask that you adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Disclaimer

All trademarks and registered trademarks mentioned are property of their respective owners and are used for identification purposes only. Use of these names does not imply endorsement or affiliation.

This project is a trademark of OGS Gesellschaft für Datenverarbeitung und Systemberatung mbH. The License does not grant rights to use the trademark without permission.

---

<a href="https://www.ogs.de/en/">
  <picture>
    <source
      srcset="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/light.svg"
      media="(prefers-color-scheme: dark)"
    />
    <img height="64" alt="OGS Logo" src="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/dark.svg"
  </picture>
</a>

Gesellschaft für Datenverarbeitung und Systemberatung mbH

[Imprint](https://www.ogs.de/en/imprint/) | [Contact](https://www.ogs.de/en/contact/) | [Careers](https://www.ogs.de/en/about-ogs/#Careers)
