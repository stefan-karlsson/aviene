---
description: "JavaScript and TypeScript coding guidelines"
applyTo: "**/*.{js,ts,jsx,tsx}"
---

# JavaScript/TypeScript Coding Instructions

## Style and Formatting

- Use 2 spaces for indentation
- Use semicolons consistently
- Use single quotes for strings unless interpolation is needed
- Line length should not exceed 100 characters
- Use trailing commas in multiline structures

## Naming Conventions

- Use kebab-case for general files
- Use PascalCase for React components, classes, interfaces, and types
- Use camelCase for variables and functions
- Use UPPER_SNAKE_CASE for constants
- Use verbs for functions, nouns for variables and classes
- Use boolean prefixes (is, has, can) for boolean variables

## TypeScript Specific

- Use TypeScript strict mode
- Define interfaces for object shapes
- Use type unions instead of any when possible
- Use generic types for reusable components
- Prefer type over interface for type aliases
- Use readonly for immutable properties
- Use adjective-first naming for types: describe capabilities before the entity (e.g., LengthCheckable, not CheckableLength).

## Modern JavaScript

- Use const and let instead of var
- Use arrow functions for callbacks and short functions
- Use template literals for string interpolation
- Use destructuring assignment for objects and arrays
- Use spread operator for array/object copying
- Use async/await instead of Promise chains

## Functions and Methods

- Use pure functions when possible (no side effects)
- Keep functions small and focused
- Use default parameters instead of checking for undefined
- Use rest parameters instead of arguments object
- Return early to reduce nesting
- Prefer passing single object with named properties

## Error Handling

- Use try-catch for async operations
- Create custom Error classes for specific error types
- Use optional chaining (?.) to safely access nested properties
- Use nullish coalescing (??) for default values

## Import and Module Organization

- Use ES6 modules (import/export) consistently
- Use absolute imports when possible (with path mapping)
- Group imports: external libraries first, then internal modules
- Use named exports for utilities, default exports for main components
- Avoid deep import paths, use index files for cleaner imports
- Use dynamic imports for code splitting when appropriate

## React/JSX (when applicable)

- Use functional components with hooks
- Use TypeScript props interfaces
- Use React.memo for performance optimization when needed
- Keep components small and focused
- Use custom hooks for reusable logic

## Code Structure and Comments

- Use step-wise comments for major function blocks (// Step 1: Process user data)
- Keep inline comments minimal, only for complex logic
- Separate logical sections with blank lines
- Use JSDoc comments for function documentation
- Structure complex functions with clear section breaks
- Avoid over-commenting self-explanatory code
