import React, { Component } from 'react'

import { ExampleComponent, Foo} from 'my-react-components'

export default class App extends Component {
  render () {
    return (
      <div>
        <div>
          <ExampleComponent text='Modern React component module' />
        </div>
        <div>
          <Foo text='Modern React component module' />
        </div>
      </div>
  )
  }
}
