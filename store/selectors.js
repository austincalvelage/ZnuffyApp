import { createSelector } from 'reselect';

const getState = state => state;

export const getHomeItems = createSelector(getState, state => state.homeItems);
export const getLists = createSelector(getState, state => state.lists);
export const getNotifications = createSelector(getState, state => state.notifications);
export const getSettings = createSelector(getState, state => state.settings);

// Get Commerce Data
export const getAllProducts = createSelector(getState, state => state.allProducts);
export const getAllCategories = createSelector(getState, state => state.allCategories);
export const getAllCartElement = createSelector(getState, state => state.getCart);
// Manage Cart State
export const getCartState = createSelector(getState, state => state.cartState);
export const toggleCartState = createSelector(getState, state => state.cartState);

// Cart Handlers
export const addToCart = createSelector(getState, state => state.addToCart);
