import Image from 'next/image';
import Card from '../ui/Card';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
  IonGrid,
  IonRow,
} from '@ionic/react';
import Notifications from './Notifications';
import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { heartOutline } from 'ionicons/icons';
import { cartOutline } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';

const AdoptCard = ({ title, type, text, author, authorAvatar, image, dogImg }) => (
  <Card className="my-4 mx-auto">
    <div className='h-screen'>
        <div className='flex w-full'>
            <div className='w-1/2 text-center border-[#DADADA] border-b-2'>Adopt Dogs</div>
            <div className='w-1/2 text-center border-[#DADADA/60] border-b-2'>Adopt Cats</div>
        </div>

    </div>
  </Card>
);

const Adopt = () => {
  const homeItems = Store.useState(getHomeItems);
  const [showNotifications, setShowNotifications]    = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Adopt</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
          <IonButton onClick={() => console.log('set route for cart')}>
              <IonIcon icon={cartOutline} />
            </IonButton>
            <IonButton onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
            <IonButton onClick={() => console.log('set route for like')}>
              <IonIcon icon={heartOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding-top ion-padding-bottom">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Welcome, Juan!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
        <AdoptCard />
      </IonContent>
    </IonPage>
  );
};

export default Adopt;
