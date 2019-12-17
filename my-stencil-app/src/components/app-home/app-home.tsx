import { Component, h } from '@stencil/core';
// Load my-component
import  'my-stencil-components'
import { Person } from 'my-stencil-components/dist/types/models/person';

const pers: Person = {
  email: 'donald.duck@andeby.disney',
  name: 'Donald Duck',
  position: '0',
  photo: null
}

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <my-component first="Import Stencil" last="'Don't call me a framework' JS" person={pers}></my-component>

        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
