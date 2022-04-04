import React from 'react';
import {
  IonCol,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardSubtitle,
  IonLabel,
  IonItem,
  IonButton,
  IonChip,
} from '@ionic/react';
import { commerce } from '../../../../../commerce/commerce';
import * as actions from '../../../../../store/actions';
import { useHistory } from 'react-router-dom';

const CartItems = ({ id, name, price, image, quantity, totalPrice }) => {
  const history = useHistory();

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    actions.addToCart(cart);
  };

  return (
    <>
      <IonCol size-sm="6">
        <IonCard className="max-h-fit" onClick={() => history.replace(`/tabs/store/${id}`)}>
          <IonImg src={image} alt="ion" />
          <IonCardHeader className="flex flex-col">
            <IonCardSubtitle className="flex justify-center my-2">{name}</IonCardSubtitle>
            <IonItem>
              <IonLabel className="ion-text-center my-2">Quantity: {quantity}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel className="ion-text-center my-2">Price: {price}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel className="ion-text-center my-2">Total: {totalPrice}</IonLabel>
            </IonItem>
          </IonCardHeader>
          <div className="flex justify-center mb-5">
            <IonButton
              color="primary"
              shape="round"
              className="ion-margin-horizontal"
              onClick={() => handleUpdateCartQty(id, quantity - 1)}
            >
              -
            </IonButton>
            <IonChip color="primary">
              <IonLabel> {quantity}</IonLabel>
            </IonChip>
            <IonButton
              color="primary"
              shape="round"
              className="ion-margin-horizontal"
              onClick={() => handleUpdateCartQty(id, quantity + 1)}
            >
              +
            </IonButton>
          </div>
        </IonCard>
      </IonCol>
    </>
  );
};

export default CartItems;
