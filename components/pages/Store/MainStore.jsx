import Store from '../../../store';
import * as selectors from '../../../store/selectors';
import * as actions from '../../../store/actions';
import { useEffect } from 'react';
import { commerce } from '../../../commerce/commerce';
import Cart from './Cart/Cart';
import Banner from '../../UI/Banner';

import { IonPage, IonHeader, IonToolbar, IonContent, IonGrid, IonRow } from '@ionic/react';

import ProductItem from './ProductItem/ProductItem';
import StoreCategories from './Categories/StoreCategories';

const AllProducts = () => {
  const products = Store.useState(selectors.getAllProducts);

  return (
    <>
      {products.map(item => (
        <ProductItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price.formatted_with_code}
          image={item.image.url}
        />
      ))}
    </>
  );
};

const MainStore = () => {
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    if (data.ok) {
      console.log(data);
    } else {
      console.log('Products failed');
    }
    console.log('Activated - Products');
    actions.setProducts(data);
  };

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    if (data.ok) {
      console.log(data);
    } else {
      console.log('Categories fetch failed');
    }
    console.log('Activated - Categ');
    actions.setCategories(data);
  };

  const CustomBanner = () => {
    return (
      <div
        className="flex flex-col justify-center items-center h-full w-full bannerImg"
        style={{ backgroundColor: '#3b82f6', color: '#FFFFFF', fontWeight: 'bold' }}
      >
        <h2>Weekly Offers</h2>
        <h5>Pedigree Kids only 25.000Gs till Sunday!</h5>
      </div>
    );
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    console.log('Activated');
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row pl-7">
              <h2 className="text-2xl">Store</h2>
            </div>
            <div className="flex flex-row">
              <Cart />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Banner>
          <CustomBanner />
        </Banner>
        <StoreCategories />
        <IonGrid>
          <IonRow>
            <AllProducts />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MainStore;
