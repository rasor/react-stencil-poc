import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Person } from 'my-stencil-components/dist/types/models/person';

const Home: React.FC = () => {
  const pers: Person = {
    email: 'donald.duck@andeby.disney',
    name: 'Donald Duck',
    position: '0',
    photo: ''
  };
  console.log(pers.name);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <my-component first="External Stencil" last="'Don't call me a framework' JS" person={pers}></my-component>

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
