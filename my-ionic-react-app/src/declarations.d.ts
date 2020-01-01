// Load my-component for untyped elements
import 'my-stencil-components'

// Load my-component for typed elements
//import { JSX as ExtJSX } from 'my-stencil-components'

export declare global {
    namespace JSX {
        // From /my-stencil-app/node_modules/@stencil/core/dist/index.d.ts
        // Untyped elements
        interface IntrinsicElements extends d.JSX.IntrinsicElements, d.JSXBase.IntrinsicElements {
            [tagName: string]: any;
        }
        // Typed elements from imported webcomponent
        //interface IntrinsicElements extends ExtJSX.IntrinsicElements{}
    }
}
