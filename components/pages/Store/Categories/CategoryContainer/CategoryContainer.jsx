import { IonSegmentButton, IonIcon } from '@ionic/react';
import React from 'react';

const CategoryContainer = ({ icon }) => {
  return (
    <IonSegmentButton value={icon}>
      {/* <IonIcon icon={icon} /> */}
      <h2>{icon}</h2>
    </IonSegmentButton>
  );
};

export default CategoryContainer;
