import React, { useRef, useEffect } from 'react';
// import { Person } from 'my-stencil-components/dist/types/models/person';
// import { Components as WebComponents } from 'my-stencil-components/dist/types';

const MyComponentFunc: React.FC = () => {
    return (
            <div />
    );
};

export default MyComponentFunc;

// //{ person: Person }
// const MyComponentFunc: React.FC = (props: WebComponents.MyComponent) => {

//     const wcEl: any = useRef(null);
//     // Similar to componentDidMount and componentDidUpdate:
//     useEffect(() => {
//         // Apply objs directly to El after el created
//         wcEl.current.person = props.person;
//         console.log(props.person.name);
//     });

//     return (
//             // <my-component inputRef={(el: any) => wcEl = el} />
//             <my-component ref={wcEl} first={props.first} />
//     );
// };

// export default MyComponentFunc;
