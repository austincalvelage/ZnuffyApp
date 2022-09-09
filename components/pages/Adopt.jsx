import Image from 'next/image';
import Card from '../ui/Card';
import classNames from 'classnames';

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
import FilterCarrousel from '../FilterCarrousel';



const AdoptCard = () => {
    const [animalType, setAnimalType] = useState('dog');
    function animalToggle(event) {
        setAnimalType(event.target.id)
    }
    return (
        <Card className="my-4 mx-auto font-montserrat">
            <div className='h-screen'>
                <h1 className='text-2xl px-4 font-medium mb-10'>Welcome, Juan!</h1>
                <div className='flex mb-10'>
                    <a
                        className={classNames('w-1/2 border-b-2 pb-2 text-center font-medium text-black/70 hover:cursor-pointer', animalType === 'dog' ? 'border-[#DADADA]' : 'border-[#DADADA/60] text-black/50 font-normal' )}
                        id="dog"
                        onClick={animalToggle}
                    >
                        Adopt Dogs
                    </a>
                    <a 
                        className={classNames('w-1/2 border-b-2 pb-2 text-center font-medium text-black/70 hover:cursor-pointer', animalType === 'cat' ? 'border-[#DADADA]' : 'border-[#DADADA/60] text-black/50 font-normal' )}
                        id="cat"
                        onClick={animalToggle}
                    >
                        Adopt Cats
                    </a>
                </div>
                <div className='pl-4 space-y-10'>
                    <p className='text-black/50 text-center'>Help us find a new home to <span className='text-[#00A6EB]'>{0}</span> {`${animalType.charAt(0).toUpperCase() + animalType.substring(1)}'s`}</p>
                    <FilterCarrousel animalFilter={animalType} />
                </div>
            </div>
      </Card>
    )
};

const Adopt = () => {
  const homeItems = Store.useState(getHomeItems);
  const [showNotifications, setShowNotifications]    = useState(false);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
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
        <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
        <AdoptCard />
      </IonContent>
    </IonPage>
  );
};

export default Adopt;
