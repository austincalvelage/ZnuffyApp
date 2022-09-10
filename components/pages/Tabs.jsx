import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cog, flash, storefront, paw } from 'ionicons/icons';

import Home from './Feed';
import MainStore from './Store/MainStore';
import ListDetail from './Store/ListDetail';
import Settings from './Settings';

import CartModal from './Store/Cart/CartModal/CartModal';
import CartPage from './Store/Cart/CartPage';
import ProductView from './Store/ProductItem/ProductView/ProductView';
import Adopt from './Adopt/Adopt';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/adopt" component={Adopt} exact={true} />
        <Route path="/tabs/feed" component={Home} exact={true} />
        <Route path="/tabs/store" component={MainStore} exact={true} />
        {/* <Route path="/tabs/store/:listId" component={ListDetail} exact={true} /> */}
        <Route path="/tabs/store/cart" component={CartPage} exact={true} />
        <Route path="/tabs/store/:id" component={ProductView} exact={true} />
        <Route path="/tabs/settings" component={Settings} exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/feed" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/Adopt">
          <IonIcon icon={paw} />
          <IonLabel>Adopt</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/feed">
          <IonIcon icon={flash} />
          <IonLabel>Feed</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/store">
          <IonIcon icon={storefront} />
          <IonLabel>Shop</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href="/tabs/settings">
          <IonIcon icon={cog} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
