export declare global {
    // From /my-stencil-app/node_modules/@stencil/core/dist/index.d.ts
    namespace JSX {
        interface IntrinsicElements extends d.JSX.IntrinsicElements, d.JSXBase.IntrinsicElements {
            [tagName: string]: any;
        }
    }
}
