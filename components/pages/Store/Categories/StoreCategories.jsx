import React from 'react';
import { IonSegment } from '@ionic/react';
import CategoryContainer from './CategoryContainer/CategoryContainer';
import Store from '../../../../store';
import * as selectors from '../../../../store/selectors';
import { useEffect } from 'react';

const StoreCategories = () => {
  const categories = Store.useState(selectors.getAllCategories);

  useEffect(() => {
    console.log(categories);
  });

  return (
    <IonSegment scrollable value="heart" className="ion-padding" color="primary">
      {categories.map(categories => (
        <CategoryContainer icon={categories.name} key={categories.name} />
      ))}
    </IonSegment>
  );
};

export default StoreCategories;
