import Store from '.';

export const setMenuOpen = open => {
  Store.update(s => {
    s.menuOpen = open;
  });
};

export const setNotificationsOpen = open => {
  Store.update(s => {
    s.notificationsOpen = open;
  });
};

export const setSettings = settings => {
  Store.update(s => {
    s.settings = settings;
  });
};

// App-specific actions
export const setDone = (list, item, done) => {
  Store.update((s, o) => {
    const listIndex = o.lists.findIndex(l => l === list);
    const itemIndex = o.lists[listIndex].items.findIndex(i => i === item);
    s.lists[listIndex].items[itemIndex].done = done;
    if (list === o.selectedList) {
      s.selectedList = s.lists[listIndex];
    }
  });
};

// Commerce States
export const setProducts = items => {
  Store.update(s => {
    s.allProducts = items;
  });
};

export const setCategories = categories => {
  Store.update(s => {
    s.allCategories = categories;
  });
};

// Display Cart
export const showCart = async cart => {
  Store.update(s => {
    s.getCart = cart;
  });
};

// ToggleCart
export const toggleCartState = async state => {
  Store.update(s => {
    s.cartState = !s.cartState;
  });
};

// Get Cart State
export const getCartState = async state => {
  Store.update(s => {
    s.cartState = state;
  });
};

// Add specific item to Cart
export const addToCart = item => {
  Store.update(s => {
    s.addToCart = item;
  });
};
