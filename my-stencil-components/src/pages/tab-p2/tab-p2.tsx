import { Component, h } from '@stencil/core';

@Component({
  tag: 'tab-p2',
  // styleUrl: 'tab-p2.css',
  shadow: true
})
export class TabP2 {

  render() {
    console.log('rendering P2');
    return (
      <div class='tab-p2'>
        <h5>--- my-stencil-components - TabP2 ---></h5>

        <p>Hello</p>

        <stencil-route-link url='/'>
          <button>
            P1 page
          </button>
        </stencil-route-link>
        <h5>x--- TabP2 ---</h5>
      </div>
    );
  }
}
