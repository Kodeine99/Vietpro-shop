import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web


const initialState = {
  name: 'ABC',
};
const initialCartState = {
  items: [],
}
// reducers
const cartReducer =  (state = initialCartState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const product = action.payload;
      const cart = state.items;

      let check = false;

      cart.map((item) => {
        if (item.id === product.id) {
          check = true;
          item.qty += product.qty;
        }
        return item;
      })
      if (!check) {
        cart.push(product);
      }
      return {...state, items: cart};
    
    case 'UPDATE_CART_ITEM':
      const { id, qty } = action.payload;
      const cart1 = state.items.map((item) => {
        if (item.id === id) {
          item.qty = qty;
        }
        return item;
      });
      return { ...state, items: cart1 };
    
    case 'DELETE_CART_ITEM':
      const cart2 = state.items.filter((item) => item.id !== action.payload);
      return { ...state, items: cart2 };
    case 'RESET_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
// combine reducers
const reducers = combineReducers({
  cart: cartReducer,
  user: userReducer,
});
// config persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
}
const persistedReducer = persistReducer(persistConfig, reducers);


// create store
const store = createStore(persistedReducer);
persistStore(store);

export default store;
