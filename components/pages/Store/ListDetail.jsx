import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import Store from '../../../store';
import * as actions from '../../../store/actions';
import * as selectors from '../../../store/selectors';

const ListDetail = ({ match }) => {
  const lists = Store.useState(selectors.getLists);
  const {
    params: { listId },
  } = match;
  const loadedList = lists.find(l => l.id === listId);

  // const products = Store.useState(selectors.getAllProducts);
  // const {
  //   params: { id },
  // } = match;
  // const selectedProduct = products.find(product => product.id === id);

  console.log('This is lists', lists);
  console.log('This is ladedList', loadedList);
  console.log('This is all products', products);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/store" />
          </IonButtons>
          <IonTitle>{lists.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{loadedList}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ListItems list={loadedList} /> */}
      </IonContent>
    </IonPage>
  );
};

export default ListDetail;
