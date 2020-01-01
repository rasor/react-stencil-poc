import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useEffect, Suspense } from 'react';
import { Person } from 'my-stencil-components/dist/types/models/person';
import MyComponentClass from '../components/MyComponentClass';
//import MyComponentFunc from '../components/MyComponentFunc';
const MyComponentFunc = React.lazy(() => import('../components/MyComponentFunc'));

const Home: React.FC = () => {
  const pers: Person = {
    email: 'donald.duck@andeby.disney',
    name: 'Donald Duck',
    position: '0',
    photo: ''
  };
  console.log(pers.name);

  const wcEl: any = useRef(null);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Apply objs directly to El after el created
    wcEl.current.person = pers;
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>==============</p>
        <p>{'Using <my-component> webcomponent directly:'}</p>
        {pers && (
          // You must use DOM ref, when setting object properties in React
          <my-component ref={wcEl} first="External Stencil" last="'Don't call me a framework' JS"></my-component>
          // You can't set an object property...
          // <my-component first="External Stencil" last="'Don't call me a framework' JS" person={pers}></my-component>
        )}

        <p>==============</p>
        <p>{'Using <my-component> webcomponent through <MyComponent> React class wrapper:'}</p>
        <MyComponentClass first="Class Wrapper" person={pers}></MyComponentClass>
        <p>==============</p>
        {/* https://blog.bitsrc.io/lazy-loading-react-components-with-react-lazy-and-suspense-f05c4cfde10c */}
        <p>{'Lazy loading <my-component> webcomponent through <MyComponent> React function wrapper:'}</p>
        <Suspense fallback={<div>Loading...</div>}>
          <MyComponentFunc first="Func Wrapper" person={pers}></MyComponentFunc>
        </Suspense>
        <p>==============</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
