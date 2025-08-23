# Serverless SaaS Platform

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![AGPL License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/stefan-karlsson/aviene">
    <img src="docs/assets/aviene_logo_small.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Aviene</h3>

  <p align="center">
    Serverless SaaS platform monorepo.
    <br />
    <a href="https://github.com/stefan-karlsson/aviene"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/stefan-karlsson/aviene/issues">Report Bug</a>
    ·
    <a href="https://github.com/stefan-karlsson/aviene/issues">Request Feature</a>
  </p>
</div>

## Table of Contents

- [Serverless SaaS Platform](#serverless-saas-platform)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
    - [Built With](#built-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Roadmap](#roadmap)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)
  - [Acknowledgments](#acknowledgments)

## About The Project

Aviene provides the scaffolding for a modern, cloud-native SaaS platform. It emphasizes scalability, event-driven communication, and developer experience while remaining cloud-agnostic.

### Built With

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/)
- [Turborepo](https://turbo.build/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Getting Started

### Prerequisites

- Node.js (v24 or later)
- pnpm 10

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/stefan-karlsson/aviene.git
   cd aviene
   ```
2. Install dependencies
   ```bash
   pnpm install
   ```
3. Run lint and tests
   ```bash
   pnpm lint
   pnpm test
   ```

## Usage

Build packages or run type checks:

```bash
pnpm build:packages
pnpm check:types
```

## Roadmap

TBD

See the [open issues](https://github.com/stefan-karlsson/aviene/issues) for a full list of proposed features.

## Contributing

Contributions are what make the open source community such an amazing place. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the AGPL-3.0 License. See `LICENSE` for more information.

## Contact

Project Link: [https://github.com/stefan-karlsson/aviene](https://github.com/stefan-karlsson/aviene)

## Acknowledgments

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

[contributors-shield]: https://img.shields.io/github/contributors/stefan-karlsson/aviene.svg?style=for-the-badge
[contributors-url]: https://github.com/stefan-karlsson/aviene/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/stefan-karlsson/aviene.svg?style=for-the-badge
[forks-url]: https://github.com/stefan-karlsson/aviene/network/members
[stars-shield]: https://img.shields.io/github/stars/stefan-karlsson/aviene.svg?style=for-the-badge
[stars-url]: https://github.com/stefan-karlsson/aviene/stargazers
[issues-shield]: https://img.shields.io/github/issues/stefan-karlsson/aviene.svg?style=for-the-badge
[issues-url]: https://github.com/stefan-karlsson/aviene/issues
[license-shield]: https://img.shields.io/github/license/stefan-karlsson/aviene.svg?style=for-the-badge
[license-url]: https://github.com/stefan-karlsson/aviene/blob/main/LICENSE
