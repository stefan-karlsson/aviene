# Use Node.js with Native TypeScript Support

- Status: accepted
- Deciders: Stefan Karlsson
- Date: 2025-05-20
- Tags: runtime, typescript, development

## Context and Problem Statement

When building a modern backend, choosing the right runtime environment and type system is crucial for development efficiency, code quality, and maintainability. The project needs a runtime that provides excellent TypeScript support, good performance, and a rich ecosystem of packages and tools.

## Decision Drivers

- TypeScript integration and support
- Runtime performance and stability
- Development experience and tooling
- Package ecosystem and community support
- Deployment and hosting options
- Long-term maintenance and support
- Build and development workflow efficiency

## Considered Options

- Node.js (Vanilla)
- Node.js with Native TypeScript support
- Node.js with TypeScript using tsc
- Node.js with TypeScript using ts-node
- Node.js with TypeScript using tsx
- Node.js with TypeScript using Vite
- Deno
- Bun

## Decision Outcome

Chosen option: Node.js with "Native TypeScript support", because it minimizes external dependencies by leveraging Node.js's built-in TypeScript capabilities while providing crucial type safety and IDE improvements over vanilla Node.js. Although it's still an experimental feature, the benefit of having zero additional runtime dependencies outweighs the current limitations.

### Positive Consequences

- Eliminates the need to first transpile the code
- No need for additional transpilation tools
- Access to the large ecosystem of npm packages
- Excellent IDE support and development tools
- Extensive community support and documentation
- Easy fallback to traditional TypeScript compilation (tsc) if needed
- Built-in type checking and error prevention
- Seamless integration with existing JavaScript code
- Excellent support from major cloud providers like AWS, Google Cloud, and Azure

### Negative Consequences

- Requires Node.js v22.6.0 or later for full native TypeScript support
- Some TypeScript features and syntax may not work in older Node.js versions
- Need to maintain Node.js version compatibility across development team
- Some npm packages may not work correctly with native TypeScript support
- Currently experimental feature with some limitations
- Limitations with certain TypeScript features

## Pros and Cons of the Options

### Node.js with Native TypeScript support

- Good, because it provides native TypeScript support without transpilation
- Good, because it has zero runtime dependencies
- Good, because it integrates directly with Node.js's module system
- Good, because it maintains full compatibility with the npm ecosystem
- Good, because it simplifies the development workflow
- Bad, because it requires Node.js v22.6.0 or later
- Bad, because it's still an experimental feature in Node.js
- Bad, because some TypeScript features are not yet supported
- Bad, because IDE integration is still maturing for this approach

### ts-node

- Good, because it works with older Node.js versions
- Good, because it's well-documented
- Good, because it performs type checking by default
- Bad, because it's slower than native TypeScript support
- Bad, because it adds an extra dependency
- Bad, because it can have memory issues with large projects

### tsx

- Good, because it's faster than ts-node
- Good, because it has a simpler setup
- Good, because it supports ESM out of the box
- Bad, because it doesn't perform type checking
- Bad, because it requires additional type checking step
- Bad, because it's relatively new

### Vite

- Good, because it provides extremely fast development server
- Good, because it has built-in TypeScript support
- Good, because it supports hot module replacement
- Good, because it has excellent build optimization
- Bad, because it's primarily designed for frontend development
- Bad, because it requires additional configuration for backend use

### Node.js with tsc (TypeScript compiler)

- Good, because it's the official TypeScript compiler
- Good, because it provides full type checking
- Good, because it's highly configurable
- Bad, because it requires a separate build step
- Bad, because it's slower for development
- Bad, because it needs additional configuration

### Deno

- Good, because it has built-in TypeScript support
- Good, because it has a secure-by-default design
- Good, because it has a modern module system
- Bad, because it has a smaller ecosystem
- Bad, because it's not as widely adopted in production
- Bad, because it's not fully compatible with npm packages

### Bun

- Good, because it's extremely fast
- Good, because it has built-in TypeScript support
- Good, because it's compatible with npm packages
- Bad, because it's relatively new and less stable
- Bad, because it has a smaller community
- Bad, because it might have compatibility issues with some packages

### Other Tools

Some other tools taken into consideration:

- tsup
  - Good, because it's built on esbuild for fast builds
  - Good, because it supports multiple output formats (ESM, CJS)
  - Bad, because it's primarily a build tool, not a development runtime

- esbuild
  - Good, because it's extremely fast
  - Good, because it has built-in TypeScript support
  - Bad, because it doesn't do type checking
  - Bad, because it requires additional configuration

- swc
  - Good, because it's very fast (Rust-based)
  - Good, because it supports TypeScript transformation
  - Bad, because it doesn't do type checking
  - Bad, because setup can be complex

- tsc-watch
  - Good, because it provides file watching capabilities
  - Good, because it integrates with tsc directly
  - Bad, because it's just a wrapper around tsc
  - Bad, because it inherits tsc's performance limitations

## Implementation Details

Node.js v22.6.0 introduced experimental support for TypeScript through "type stripping" with the `--experimental-strip-types` flag. This allows running TypeScript code directly without transpilation. In v22.7.0, support was extended to transform TypeScript-only syntax like `enum`s and `namespace`s with the `--experimental-transform-types` flag.

The native TypeScript support in Node.js:

- Strips type annotations from TypeScript code before running it
- Transforms TypeScript-specific syntax when needed
- Does not require a `tsconfig.json` file
- Works with TypeScript version 5.7 or higher
- Provides type checking through the TypeScript compiler
- Supports type definitions through @types packages

## Links

- [Node.js TypeScript Support](https://nodejs.org/en/learn/typescript/run-natively)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Vite Documentation](https://vitejs.dev/)
- [tsx Documentation](https://github.com/esbuild-kit/tsx)
