export * from './components';
import '@stencil/router';
//import 'my-stencil-components';

// https://stenciljs.com/docs/react
// Load your web components
import { applyPolyfills, defineCustomElements } from 'my-stencil-components/loader'

applyPolyfills().then(() => {
     defineCustomElements(window);
   });

