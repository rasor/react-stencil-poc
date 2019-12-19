import { Component, h } from '@stencil/core';


@Component({
  tag: 'my-tabs',
  styleUrl: 'my-tabs.css',
  shadow: true
})
export class MyTabs {

  render() {
    return (
      <div>
        <h5>--- MyTabs ---></h5>
        <header>
          <h1>Tabs Header</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='tab-p1' exact={true} />
              {/* <stencil-route url='/profile/:name' component='app-profile' /> */}
            </stencil-route-switch>
          </stencil-router>
          <h5>--- MyTabs ---></h5>
        </main>
        <h5>x--- MyTabs ---</h5>
      </div>
    );
  }
}
