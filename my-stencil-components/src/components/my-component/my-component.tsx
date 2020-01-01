import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { Person } from '../../models/person';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})

export class MyComponent {
  /** 
   * Enable REACT to get typesafe access this component while also get any access to the DOM element
   */
  @Prop() ref: any;
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * A typed object
   */
  @Prop() person: Person;
 
  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

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
