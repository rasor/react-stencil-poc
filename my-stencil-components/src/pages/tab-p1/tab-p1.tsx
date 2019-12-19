import { Component, h } from '@stencil/core';
import { Person } from '../../models/person';

const pers: Person = {
  email: 'donald.duck@andeby.disney',
  name: 'Donald Duck',
  position: '0',
  photo: null
}

@Component({
  tag: 'tab-p1',
  styleUrl: 'tab-p1.css',
  shadow: true
})
export class TabP1 {

  render() {
    console.log('rendering P1');
    return (
      <div class='tab-p1'>
        <h5>--- my-stencil-components - TabP1 ---></h5>
        <my-component first="Import Stencil" last="'Don't call me a framework' JS" person={pers}></my-component>

        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/p2'>
          <button>
            P2 page
          </button>
        </stencil-route-link>

        {/* <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link> */}
        <h5>x--- TabP1 ---</h5>
      </div>
    );
  }
}
