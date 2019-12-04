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

### Serve the default demo webcomponent

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

### Serve the default demo stencil-app with the webcomponent

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

### Serve the default demo stencil-pwa with the webcomponent

```bash
# TERMINAL 4
cd my-stencil-pwa
npm install
npm start
# xdgopen http://localhost:3335/
```

As with the my-stencil-app:

* Paste `<script>` into `src/index.html`
* Paste `<my-component>` into `src/pages/Home.tsx`

Now you can see the webcomponent on the home page if both projects are started.

### Serve the default demo ionic-react-app with the webcomponent

```bash
# TERMINAL 5
cd my-ionic-react-app
npm install
npm start
# xdgopen http://localhost:3000/
```

As with the my-stencil-app:

* Paste `<script>` into `public/index.html`
* Paste `<my-component>` into `src/components/app-home/app-home.tsx`

Create a new file `src/declaration.d.ts` with the content

```typescript
export declare global {
    // From /my-stencil-app/node_modules/@stencil/core/dist/index.d.ts
    namespace JSX {
        interface IntrinsicElements extends d.JSX.IntrinsicElements, d.JSXBase.IntrinsicElements {
            [tagName: string]: any;
        }
    }
}
```

Now you can see the webcomponent on the home page if both projects are started.

## npm publish demo webcomponents to github registry

Add a personal access token

* Goto https://github.com/settings/tokens
    * Generate new token
    * [Scopes](https://help.github.com/en/github/managing-packages-with-github-packages/about-github-packages#about-tokens):
        * read:packages
        * write:packages
        * delete:packages
        * repo
    * Name: npm publish to github 
    * Copy the token hex string to editor

Add to `my-stencil-components/package.json`.  
If you have several projects (as in this case) you also need to add section [repository](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#publishing-multiple-packages-to-the-same-repository) - otherwise it will use the name on the project to try to locate the package folder (which it fetches from the repo name...)

```json
 // increase version
 "version": "0.0.2",
 // add 
 "publishConfig": {
    "registry":"https://npm.pkg.github.com/@rasor"
  },
  "repository" : {
    "type" : "git",
    "url": "ssh://git@github.com:rasor/react-stencil-poc.git",
    "directory": "react-stencil-poc"
  },
```

Login to npm registry.  
You can do that with a [~/.npmrc](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#authenticating-with-a-personal-access-token) file or  
in CLI as here:

```bash
# TERMINAL 2
npm login --registry=https://npm.pkg.github.com/
# Username: (rasor in my case)
# Password: (Paste personal access token)
# Email: (your email)

cd my-stencil-components
npm publish
# + my-stencil-components@0.0.2
```

You should now see the package uploaded to https://github.com/rasor/react-stencil-poc/packages/

## Extend webcomponents with element having typed attributes

The demo webcomponent `<my-component>` has attributes, that are assigned strings.

It would be nice to feed it a typed object.  
From [Tab3.tsx code in 'Announcing Ionic React'](https://ionicframework.com/blog/announcing-ionic-react/) put the `export interface Person` into `my-stencil-components/src/models/person.ts` 

In `my-stencil-components/src/components/my-component/my-component.tsx` add the Person, too

```typescript
import { Person } from '../../models/person';

export class MyComponent {
  /**
   * A typed object
   */
  @Prop() person: Person;

  render() {
    return <div>
      <div>Hello, World! I'm {this.getText()}</div>
      {this.person &&
        <div >
          <div slot="start">
            <img src={this.person.photo} />
          </div>
          <div>
            <h2>{this.person.name}</h2>
            <p>{this.person.position}</p>
          </div>
        </div>
      }
    </div>;
  }
}
```

then increase version in `package.json` and re-publish

The End