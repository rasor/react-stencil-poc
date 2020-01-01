import React from 'react';
//import { Person } from 'my-stencil-components/dist/types/models/person';
import { JSX as WcJSX } from 'my-stencil-components/dist/types';

// https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
class MyComponentClass extends React.Component<WcJSX.MyComponent> {
    wcRef: any = null;

    constructor(props: any) {
        super(props);
        this.wcRef = React.createRef();
    }

    componentDidMount() {
        this._updateRef();
    }
    componentDidUpdate() {
        this._updateRef();
    }
    private _updateRef() {
        this.wcRef.current.first = this.props.first;
        this.wcRef.current.person = this.props.person;
    }

    render() {
        return (
            // <my-component inputRef={(el: any) => this.wcRef = el} />
            <my-component ref={this.wcRef} />
        );
    }
}

export default MyComponentClass;
