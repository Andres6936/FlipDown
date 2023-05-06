## FlipDown

A lightweight and performant flip styled countdown clock.

### Requirements

The most important things to know about Lit in order to work with various
browsers and tools are that:

- Lit is published as ES2019.
- Lit uses "bare module specifiers" to import modules.
- Lit uses modern web APIs such as <template>, custom elements, shadow DOM,
  and ParentNode.

  These features are supported by the latest versions of major browsers
  (including Chrome, Edge, Safari, and Firefox) and most popular tools
  (such as Rollup, Webpack, Babel, and Terser) with the exception of bare
  module specifier support in browsers.

  ![Showcase](./docs/Showcase.png)

  <details>
    <summary>How to use the Component</summary>

##

<p style="margin-top:3rem">
Lit doesn't require any specialized tools, and Lit components work in any JavaScript framework
or with any server templating system or CMS, so Lit is ideal for adding to existing projects
and applications.
</p>

First, install the component from npm:

> npm install adan-flipdown

Or using the package with yarn:

> yarn add adan-flipdown

How you use a component depends on your project and the libraries or frameworks
it uses. You can use your component in HTML, with DOM APIs, or in template languages,
for example with React:

```jsx
import * as React from 'react';
import 'adan-flipdown'

export default function App() {
    return (
        <div>
            <adan-flipdown theme="light"></adan-flipdown>
            <adan-flipdown theme="dark"></adan-flipdown>
        </div>
    );
}
```

You can create a new element anywhere in your project's sources:

```javascript
import {LitElement, html} from 'lit'
import {customElement} from 'lit/decorators.js'

// Import the package for use in the sources
import 'adan-flipdown'

@customElement('my-element')
export class MyElement extends LitElement {
    render() {
        return html`
          <adan-flipdown theme="light"></adan-flipdown>
          <adan-flipdown theme="dark"></adan-flipdown>
`
    }
}
```

### Framework Templates

Most JavaScript frameworks have great support for web components and Lit.
Just import your element definition and use the element tag names in your templates.

  </details>

  ##

  ###### Mock Design and Code Original by [Peter Butcher](https://github.com/PButcher/flipdown)
