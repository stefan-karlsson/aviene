# Use pnpm as Package Manager

- Status: accepted
- Deciders: Stefan Karlsson
- Date: 2024-03-21
- Tags: package-manager, tooling, development

## Context and Problem Statement

When starting a new JavaScript/TypeScript project, choosing the right package manager is crucial for development efficiency, dependency management, and team collaboration. The project needs a package manager that provides fast installation, efficient disk space usage, and reliable dependency resolution.

## Decision Drivers

- Installation speed and performance
- Disk space efficiency
- Dependency management reliability
- Monorepo support
- Security features
- Community support and ecosystem compatibility

## Considered Options

- npm (Node Package Manager)
- Yarn
- pnpm

## Decision Outcome

Chosen option: "pnpm", because it provides the best combination of performance, disk space efficiency, and strict dependency management while maintaining full compatibility with the npm ecosystem.

### Positive Consequences

- Significantly reduced disk space usage through content-addressable storage
- Faster installation times compared to npm and Yarn
- Strict dependency management prevents accessing packages outside their dependencies
- Excellent monorepo support with built-in workspace features
- Compatible with existing npm packages and registry

### Negative Consequences

- Some tools might not be fully compatible with pnpm's strict dependency structure
- Team members need to learn pnpm-specific commands and concepts
- May require additional configuration for certain development tools

## Pros and Cons of the Options

### npm

- Good, because it's the default package manager for Node.js
- Good, because it has the largest community and tool support
- Bad, because it's slower than alternatives
- Bad, because it uses more disk space due to flat node_modules structure
- Bad, because it has less strict dependency management

### Yarn

- Good, because it's faster than npm
- Good, because it has good monorepo support
- Good, because it has a large community
- Bad, because it still uses a flat node_modules structure
- Bad, because it has multiple versions (Classic, Berry) which can cause confusion

### pnpm

- Good, because it's the fastest package manager
- Good, because it uses significantly less disk space
- Good, because it has strict dependency management
- Good, because it has excellent monorepo support
- Good, because it's fully compatible with npm packages
- Bad, because it requires additional configuration for some tools
- Bad, because it has a smaller community than npm or Yarn

## Links

- [pnpm official documentation](https://pnpm.io/)
- [Why pnpm?](https://pnpm.io/motivation)
