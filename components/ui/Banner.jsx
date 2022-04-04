import React from 'react';
import { IonCard } from '@ionic/react';

const Banner = props => {
  return <IonCard class="w-11/12 h-36">{props.children}</IonCard>;
};

export default Banner;
