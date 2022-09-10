import React from 'react';
import { useHistory } from 'react-router-dom';

import classes from './ProductItem.module.css';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonLabel,
  IonImg,
  IonButton,
} from '@ionic/react';

import { commerce } from '../../../../commerce/commerce';
import * as actions from '../../../../store/actions';

const ProductItem = ({ name, price, image, id }) => {
  const history = useHistory();

  const handleAddToCart = async (productId, quantity) => {
    const resp = await commerce.cart.add(productId, quantity);
    actions.addToCart(resp);
    console.log('Added to cart');
  };

  return (
    <>
      <IonCol className="flex w-48 max-h-min" size-sm="6" size-md="4" size-lg="3">
        <IonCard className={`${classes.productCard}`}>
          <IonImg src={image} alt="ion" onClick={() => history.replace(`/store/${id}`)} />
          <IonCardHeader className="max-h-min" onClick={() => history.replace(`/store/${id}`)}>
            <IonCardSubtitle className={`${classes.textOverflows}`}>{name}</IonCardSubtitle>
            <IonLabel>{price}</IonLabel>
          </IonCardHeader>
          <IonButton
            color="primary"
            shape="round"
            class="ion-margin-horizontal flex items-end"
            onClick={() => handleAddToCart(id, 1)}
          >
            Add
          </IonButton>
        </IonCard>
      </IonCol>
    </>
  );
};

export default ProductItem;
