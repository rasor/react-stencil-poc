import React from 'react';
import { Person } from 'my-stencil-components/dist/types/models/person';

// https://charles-bryant.gitbook.io/hello-react-and-typescript/typescriptandreact
interface IMyComponentProps {
    first: string;
    person: Person;
}
// https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
class MyComponent extends React.Component<IMyComponentProps> {
    wcRef: any = null;

    constructor(props: any) {
        super(props);
        this.wcRef = React.createRef();
    }

    componentDidMount() {
        this.wcRef.current.first = this.props.first;
        this.wcRef.current.person = this.props.person;
    }

    componentDidUpdate() {
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

export default MyComponent;
