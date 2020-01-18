import Foo from './components/Foo'
import ExampleComponent from './components/ExampleComponent'

// export Foo and Bar as named exports
export { Foo, ExampleComponent }

// alternative, more concise syntax for named exports
// export { default as ExampleComponent } from './ExampleComponent'

// you can optionally also set a default export for your module
// export default { Foo, ExampleComponent }