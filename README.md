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
# TERMINAL 2
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
  <my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>
```

## Serve the default demo stencil-app with the webcomponent

```bash
# TERMINAL 3
cd my-stencil-app
npm install
npm start
# xdgopen http://localhost:3334/
```

The app is displayed in http://localhost:3334/index.html. In `my-stencil-app/src/index.html` you can paste the webcomponent loading lines from my-stencil-components above app.esm.js:

```html
  <script type="module" src="http://localhost:3333/build/my-stencil-components.esm.js"></script>
  <script nomodule src="http://localhost:3333/build/my-stencil-components.js"></script>
```

And instanciate one in `my-stencil-app/src/components/app-home/app-home.tsx` with:

```html
  <my-component first="External Stencil" last="'Don't call me a framework' JS"></my-component>
```

Now you can see the webcomponent on the home page if both projects are started.

## Serve the default demo stencil-pwa with the webcomponent

```bash
# TERMINAL 4
cd my-stencil-pwa
npm install
npm start
# xdgopen http://localhost:3335/
```

As with the my-stencil-app:

* Paste `<script>` into `src/index.html`
* Paste `<my-component>` into `src/components/app-home/app-home.tsx`

Now you can see the webcomponent on the home page if both projects are started.

The End