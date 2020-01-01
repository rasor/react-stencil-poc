import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useEffect } from 'react';
import { Person } from 'my-stencil-components/dist/types/models/person';
import MyComponentClass from '../components/MyComponentClass';
import MyComponentFunc from '../components/MyComponentFunc';

const Home: React.FC = () => {
  const pers: Person = {
    email: 'donald.duck@andeby.disney',
    name: 'Donald Duck',
    position: '0',
    photo: ''
  };
  console.log(pers.name);

  const wcEl:any = useRef(null);
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
        {/* Soon a sln? https://github.com/skatejs/skatejs/issues/1058#issuecomment-275851441 */}
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
        <p>{'Using <my-component> webcomponent through <MyComponent> React function wrapper:'}</p>
        <MyComponentFunc first="Func Wrapper" person={pers}></MyComponentFunc>
        <p>==============</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
