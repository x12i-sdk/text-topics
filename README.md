# @x12i/text-topics usage example

Evidence-backed topic tags and extractive source phrases.

This consuming application demonstrates **tag a support message with a small evidence-backed taxonomy** using the published npm package, pinned to `1.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Tag support text using an explicit taxonomy and return evidence spans for the matching rule.
- Extract ranked phrases from marked English prose without inventing topic labels.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/text-topics)
- [Implementation monorepo](https://github.com/x12i/distinctive-terms)
- [Reviewed package source](https://github.com/x12i/distinctive-terms/tree/75caadc9b8e4851a7250a4d9ad3f480131805413/packages/text-topics)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
