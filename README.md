## Setting up test projects

Using guides:

* [Stencil](https://stenciljs.com/docs/getting-started)
* [Announcing Ionic React](https://ionicframework.com/blog/announcing-ionic-react/)

```bash
npm init stencil
# Choose component - name: my-stencil-components

npm init stencil
# Choose app - name: my-stencil-app

npm init stencil
# Choose ionic-pwa - name: my-stencil-pwa

npx ionic start
# choose react - template: blank - name: my-ionic-react-app
```

## Serve the default demo webcomponent
```bash
# TERMINAL 1
cd my-stencil-components
npm install
npm start
# xdgopen http://localhost:3333/
```

The webcomponent will be served in to main files:
* http://localhost:3333/build/my-stencil-components.esm.js
* http://localhost:3333/build/my-component.entry.js

It is displayed in http://localhost:3333/index.html and loaded with:

```html
  <script type="module" src="/build/my-stencil-components.esm.js"></script>
  <script nomodule src="/build/my-stencil-components.js"></script>
```

And instanciated with:

```html
`  <my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>
``

The End