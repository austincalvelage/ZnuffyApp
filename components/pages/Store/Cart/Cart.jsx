import { useEffect, useState } from 'react';
import CartModal from './CartModal/CartModal';

import Store from '../../../../store';
import * as selectors from '../../../../store/selectors';
import * as actions from '../../../../store/actions';
import { commerce } from '../../../../commerce/commerce';
import { IonIcon, IonChip, IonLabel } from '@ionic/react';
import { cart } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Cart = () => {
  const history = useHistory();

  const [totalItems, setTotalItems] = useState();
  const newItemAdded = Store.useState(selectors.addToCart);
  const cartState = Store.useState(selectors.getCartState);

  const fetchCart = async () => {
    const data = await commerce.cart.retrieve();
    actions.showCart(data);
    setTotalItems(data.total_items);
  };

  useEffect(() => {
    fetchCart();
  }, [newItemAdded]);

  return (
    <>
      <IonChip color="primary" onClick={() => actions.toggleCartState(!cartState)}>
        <IonIcon icon={cart} />
        <IonLabel> {totalItems}</IonLabel>
      </IonChip>
      {cartState && <CartModal />}
    </>
  );
};

export default Cart;
