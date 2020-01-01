import React, { useRef, useEffect } from 'react';
// import { Person } from 'my-stencil-components/dist/types/models/person';
import { JSX as WcJSX } from 'my-stencil-components/dist/types';

const MyComponentFunc: React.FC<WcJSX.MyComponent> = (props) => {

    const wcEl: any = useRef(null);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Apply objs directly to El after el created
        wcEl.current.person = props.person;
        //console.log(props.person.name);
    });

    return (
        // <my-component inputRef={(el: any) => wcEl = el} />
        <my-component ref={wcEl} first={props.first} />
    );
};
export default MyComponentFunc;
