# Project Folders Structure Blueprint

## Last updated

August 25, 2025

---

## Initial Auto-detection Phase

- **Project Type**: Node.js/TypeScript monorepo (detected via `package.json`, `pnpm-workspace.yaml`, `turbo.json`, and multiple `apps/` and `packages/`).
- **Monorepo**: Yes (multiple projects, shared dependencies, root orchestration).
- **Microservices**: Partial (multiple backend services, each in its own folder).
- **Frontend**: Not detected in current structure (no `public/`, `src/components/`, or UI framework configs).
- **Technologies**: Node.js, TypeScript, JavaScript, YAML, Markdown, GitHub Actions.

---

## 1. Structural Overview

- **Organization**: By domain (apps) and shared libraries (packages).
- **Monorepo**: Managed with `pnpm` and `turbo`, supporting multiple deployable apps and shared packages.
- **Patterns**: Consistent use of `src/` for source, `tests/` for tests, and `README.md` for documentation.
- **Rationale**: Promotes code reuse, clear separation of concerns, and scalable team workflows.

---

## 2. Directory Visualization (Markdown List, Depth 3)

- /
  - apps/
    - server/
      - user-management/
        - src/
        - tests/
        - aws-resources.yml
        - package.json
  - packages/
    - shared/
      - utils.types/
        - src/
        - README.md
      - eslint.config/
        - src/
        - README.md
      - typescript.config/
        - src/
        - README.md
    - server/
      - aws-sdk/
        - src/
        - README.md
      - http/
        - src/
        - README.md
  - .github/
    - workflows/
    - prompts/
  - package.json
  - pnpm-workspace.yaml
  - turbo.json
  - README.md

---

## 3. Key Directory Analysis

### apps/

- **Purpose**: Contains deployable applications (e.g., backend services).
- **Pattern**: Each app has its own `src/`, `tests/`, and config files.

### packages/

- **Purpose**: Shared libraries and tools.
- **Pattern**: `shared/` for cross-cutting utilities, `server/` for backend-specific libraries.

### .github/

- **Purpose**: CI/CD workflows and prompt templates.

---

## 4. File Placement Patterns

- **Configuration**: Root and per-app/package (`package.json`, `tsconfig.json`, `.eslintrc`, etc.).
- **Source Code**: `src/` in each app/package.
- **Tests**: `tests/` or `__tests__/` in each app/package.
- **Docs**: `README.md` in each app/package.
- **CI/CD**: `.github/workflows/`.

---

## 5. Naming and Organization Conventions

- **Files**: `kebab-case` for files, `PascalCase` for types/classes, dot-prefixed for configs.
- **Folders**: `kebab-case`, `src/` for source, `tests/` for tests.
- **Modules**: Each package is a module, imported via workspace alias (e.g., `@aviene/utils.types`).

---

## 6. Navigation and Development Workflow

- **Entry Points**: Each app’s `src/` (e.g., `index.ts`), root and per-package `README.md`.
- **Adding Features**: In relevant app/package’s `src/`.
- **Tests**: In `tests/` or `__tests__/`.
- **Dependencies**: Managed via `pnpm` workspaces.

---

## 7. Build and Output Organization

- **Build Config**: Root-level scripts (`package.json`, `turbo.json`), per-app/package scripts.
- **Output**: Typically `dist/` (excluded from repo).
- **Environment**: Per-app/package configs.

---

## 8. Node.js-Specific Structure Patterns

- **Modules**: ESM (`type: "module"`), internal via `src/`, external via `node_modules/`.
- **Scripts**: In each `package.json`.
- **Config**: Centralized and per-app/package.

---

## 9. Extension and Evolution

- **Adding**: New folders under `apps/` or `packages/`, register in `pnpm-workspace.yaml`.
- **Scalability**: Structure supports more domains, services, or shared libraries.
- **Refactoring**: Move code between packages, update imports.

---

## 10. Structure Enforcement

- **Validation**: Linting (ESLint), formatting (Prettier), enforced in CI.
- **Monorepo**: Enforced by `pnpm` and `turbo`.
- **Docs**: Structure changes documented in `README.md` or `.github/prompts/`.

---

## Maintaining this Blueprint

- Update this document with any structural changes or new conventions.
- Last updated: August 25, 2025.

---
