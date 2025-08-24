# @aviene/guards

A robust TypeScript/JavaScript utility library for value validation and guard functions.
Provides composable, type-safe, and reusable guards to simplify input validation, type narrowing, and defensive programming in modern applications.

---

## Getting Started

### Installation

```sh
npm install @aviene/guards
# or
yarn add @aviene/guards
```

### Usage

```typescript
import { isEmpty } from "@aviene/guards";

if (isEmpty(value)) {
  // handle empty value
}
```

---

## Key Features

- **isEmpty:** Checks if a value is empty (undefined, null, empty string, empty array/object).
- **Composable Guards:** Combine multiple guards for complex validation.
- **TypeScript-first:** Full type safety and IDE support.
- **No Dependencies:** Lightweight and fast.

---

## License

Distributed under the GNU AFFERO GENERAL PUBLIC License. See [LICENSE](LICENSE) for details.

---
