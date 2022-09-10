import React from 'react';
import Image from 'next/image';
import Card from '../../../UI/Card';
import { getHomeItems } from '../../../../store/selectors';
import Store from '../../../../store';
import { IonGrid, IonRow, IonIcon } from '@ionic/react';
import { heartOutline } from 'ionicons/icons';

const PetCard = () => {
  const petsList = Store.useState(getHomeItems);
  return (
    <>
      {petsList.map((pet, index) => (
        <Card className="my-4 mx-auto font-montserrat p-3" key={index}>
          <div className="w-48">
            <div className="h-40 relative">
              <div className="flex">
                {pet.tag ? (
                  <div className="z-10 border-2 border-solid rounded-full border-slate-200 bg-slate-100 px-2 m-2">
                    <span>{pet.tag}</span>
                  </div>
                ) : null}
                <IonGrid className="h-full z-0">
                  <IonRow className="h-full">
                    <Image
                      className="rounded-t-xl w-48"
                      objectFit="cover"
                      src={pet.img}
                      alt=""
                      layout="fill"
                    />
                  </IonRow>
                </IonGrid>
              </div>
            </div>
            <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
              <div className="flex flex-column justify-between items-center">
                <h2 className="font-medium text-2xl text-gray-800 dark:text-gray-100 py-1">
                  {pet.name}
                </h2>
                <IonIcon icon={heartOutline} className="text-2xl" />
              </div>
              <div className="flex items-end">
                <div className="flex flex-column justify-start py-1">
                  <p className="sm:text-sm text-s text-gray-500 dark:text-gray-400 p-1 pr-2">
                    {pet.age}
                  </p>
                  <div className="flex items-center p-1">
                    <div
                      className="bg-slate-100"
                      style={{ border: '0.5px solid gray', height: '2vh' }}
                    />
                  </div>
                  <p className="sm:text-sm text-s text-gray-500 dark:text-gray-400 p-1 pl-2">
                    {pet.gender}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default PetCard;
