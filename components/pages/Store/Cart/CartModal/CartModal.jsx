import React, { useState } from 'react';
import Store from '../../../../../store';
import * as selectors from '../../../../../store/selectors';
import * as actions from '../../../../../store/actions';
import {
  IonModal,
  IonButton,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRow,
  IonGrid,
} from '@ionic/react';
import CartItems from './CartItems';
import { useEffect } from 'react';

import classes from '../Cart.module.css';

const ProductsInCart = ({ onSelect }) => {
  const productsInCart = Store.useState(selectors.getAllCartElement);
  return (
    <>
      {productsInCart.line_items.map(item => (
        <CartItems
          key={item.id}
          id={item.id}
          quantity={item.quantity}
          name={item.name}
          price={item.price.formatted_with_symbol}
          totalPrice={item.line_total.formatted_with_symbol}
          image={item.image.url}
        />
      ))}
    </>
  );
};

export const CartModal = () => {
  const cartState = Store.useState(selectors.getCartState);
  const productsInCart = Store.useState(selectors.getAllCartElement);

  useEffect(() => {
    console.log(productsInCart);
  }, [productsInCart]);

  return (
    <IonContent>
      <IonModal isOpen={cartState}>
        <IonHeader>
          <IonToolbar className="ion-justify-content-between" fill="clear">
            <IonTitle>Total: {productsInCart.subtotal.formatted_with_symbol}</IonTitle>
            <IonButton
              onClick={() => actions.toggleCartState(!cartState)}
              slot="primary"
              fill="clear"
            >
              Close
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow class="ion-justify-content-center">
              {productsInCart.total_items > 0 ? (
                <ProductsInCart />
              ) : (
                <h2 className={`${classes.noItemsMessage}`}>You have no items in cart</h2>
              )}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
    </IonContent>
  );
};

export default CartModal;
