# Rslib Project

## Setup

Install the dependencies:

```bash
bun install
```

## Get Started

Build the library:

```bash
bun build
```

Build the library in watch mode:

```bash
bun dev
```

## Monorepo Structure

This package is part of a monorepo. All commands, such as building or installing dependencies, 
should be executed from  the root of the project to ensure proper functionality and 
dependency management.

## Optimized Bundle Size

This library is specifically designed to generate code that is highly optimized to minimize the final
bundle size. Files with the `.stories.ts` extension, which are used exclusively by Storybook for
documentation and testing purposes, will be excluded from the final production bundle as they are
not required for the application's functionality.