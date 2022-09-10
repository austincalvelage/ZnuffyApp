import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonLabel, IonButton, IonImg } from '@ionic/react';
import ProductItem from '../ProductItem/ProductItem';

const CardCarrousel = ({ relatedProducts }) => {
  return (
    <>
      <h1 className="m-5 flex justify-center text-2xl">Related products</h1>
      <div className="flex overflow-x-auto">
        <div className="flex flex-row p-3">
          {relatedProducts &&
            relatedProducts.map(items => {
              return (
                <ProductItem
                  key={items.id}
                  id={items.id}
                  name={items.name}
                  price={items.price.formatted_with_code}
                  image={items.image.url}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CardCarrousel;
