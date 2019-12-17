import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
// Load my-component
import  'my-stencil-components'
//import  * as xx from 'my-stencil-components/dist/types/components'
//import  { MyComponent } from 'my-stencil-components/dist/types/components'
//import  { LocalJSX } from 'my-stencil-components/dist/types/components'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <my-component first="External Stencil" last="'Don't call me a framework' JS"></my-component>

        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          will be your guide.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
