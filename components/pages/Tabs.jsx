import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cog, storefront, paw, newspaperOutline, addOutline } from 'ionicons/icons';

import Home from './Feed';
import MainStore from './Store/MainStore';
import Settings from './Settings';

import CartModal from './Store/Cart/CartModal/CartModal';
import CartPage from './Store/Cart/CartPage';
import ProductView from './Store/ProductItem/ProductView/ProductView';
import Adopt from './Adopt/Adopt';
import PostPet from './Adopt/PostPet/PostPet';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/adopt" component={Adopt} exact={true} />
        {/* Store */}
        <Route path="/store" component={MainStore} exact={true} />
        <Route path="/store/cart" component={CartPage} exact={true} />
        <Route path="/store/:id" component={ProductView} exact={true} />
        {/* Settings */}
        <Route path="/settings" component={Settings} exact={true} />
        {/* Adoption */}
        <Route path="/post" component={PostPet} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" className="p-2">
        <IonTabButton tab="tab1" href="/Adopt">
          <IonIcon icon={paw} />
          <IonLabel>Adopt</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/lostAndFound">
          <IonIcon icon={newspaperOutline} />
          <IonLabel>{'Lost & found'}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/post">
          <IonIcon icon={addOutline} />
          <IonLabel>ADD</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href="/store">
          <IonIcon icon={storefront} />
          <IonLabel>Shop</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab5" href="/settings">
          <IonIcon icon={cog} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
