import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRow,
  IonGrid,
  IonButton,
  IonModal,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardSubtitle,
  IonLabel,
  IonText,
} from '@ionic/react';

import { commerce } from '../../../../../commerce/commerce';

import Store from '../../../../../store';
import * as actions from '../../../../../store/actions';
import * as selectors from '../../../../../store/selectors';
import CardCarrousel from '../../UI/CardCarrousel';
import Card from '../../../../UI/Card';

const ProductView = ({ match }) => {
  const [itemIsOpen, setItemIsOpen] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      console.log('Activated - Products');
      actions.setProducts(data);
    } catch {
      console.log('Fetch failed');
    }
  };

  const handleAddToCart = async (productId, quantity) => {
    const resp = await commerce.cart.add(productId, quantity);
    actions.addToCart(resp);
    console.log('Added to cart');
  };

  useEffect(() => {
    fetchProducts();
    console.log('Activated');
  }, []);

  const productsList = Store.useState(selectors.getAllProducts);
  const {
    params: { id },
  } = match;
  const selectedProduct = productsList.find(product => product.id === id);

  const history = useHistory();

  return (
    <>
      {selectedProduct && (
        <IonContent>
          <IonModal isOpen={itemIsOpen}>
            <IonHeader>
              <IonToolbar className="ion-justify-content-between" fill="clear">
                <IonTitle>
                  {selectedProduct ? selectedProduct.categories[0].name : 'Loading...'}
                </IonTitle>
                <IonButton onClick={() => history.push('/tabs/store')} slot="primary" fill="clear">
                  Close
                </IonButton>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonCard className="m-5 p-7">
                <IonImg src={selectedProduct.image.url} alt="ion" />
                <IonCardHeader className="flex flex-col">
                  <IonCardSubtitle className="flex flex-row justify-left text-xl">
                    {selectedProduct.name}
                  </IonCardSubtitle>
                  <IonLabel className="flex flex-row justify-left text-lg">
                    {selectedProduct.price.formatted_with_code}
                  </IonLabel>
                  <p
                    className="flex flex-row justify-left text-lg"
                    dangerouslySetInnerHTML={{ __html: selectedProduct.description }}
                  ></p>
                </IonCardHeader>
                <IonButton
                  color="primary"
                  shape="round"
                  class="flex flex-row justify-center"
                  onClick={() => handleAddToCart(id, 1)}
                >
                  Add
                </IonButton>
              </IonCard>
              <Card>
                <CardCarrousel relatedProducts={selectedProduct.related_products} />
              </Card>
            </IonContent>
          </IonModal>
        </IonContent>
      )}
    </>
  );
};

export default ProductView;
