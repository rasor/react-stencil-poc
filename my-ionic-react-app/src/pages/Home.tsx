import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useEffect } from 'react';
import { Person } from 'my-stencil-components/dist/types/models/person';
import MyComponent from '../components/MyComponent';

const Home: React.FC = () => {
  const pers: Person = {
    email: 'donald.duck@andeby.disney',
    name: 'Donald Duck',
    position: '0',
    photo: ''
  };
  //const commonProps = {person: pers};
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
        {/* Soon a sln? https://github.com/skatejs/skatejs/issues/1058#issuecomment-275851441 */}
        {pers && (
          // You must use DOM ref, when setting object properties in React
          <my-component ref={wcEl} first="External Stencil" last="'Don't call me a framework' JS"></my-component>
          // You can't set an object property...
          // <my-component first="External Stencil" last="'Don't call me a framework' JS" person={pers}></my-component>
        )}

        <p>==============</p>

        <MyComponent first="Wrapper" person={pers}></MyComponent>
        <p>==============</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
