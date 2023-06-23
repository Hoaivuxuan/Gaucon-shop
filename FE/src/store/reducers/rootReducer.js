import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import appReducer from "./appReducer";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistCommonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

// const adminPersistConfig = {
//     ...persistCommonConfig,
//     key: 'admin',
//     whitelist: ['isLoggedIn', 'adminInfo']
// };

const userPersistConfig = {
  ...persistCommonConfig,
  key: "user",
  whitelist: ["isLoggedIn", "userInfo"],
};

const initState = {
  cart: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "REMOVE_FROM_CART":
      let cart = state.cart;
      cart = cart.filter((item) => item.id !== action.payload.id);
      return { ...state, cart };
    case "ADD_TO_CART":
      // let id = Math.floor(Math.random() * 1000);
      let carts = state.cart;
      // console.log('payload', carts);
      let cartAdd = {
        id: action.payload.id,
        img: action.payload.img,
        name: action.payload.name,
        count: action.payload.count,
        price: action.payload.price,
      };
      let check = 0;
      for (let i = 0; i < carts.length; i++) {
        if (carts[i].id === cartAdd.id) {
          carts[i].count += cartAdd.count;
          check = 1;
          break;
        }
      }
      if (check === 1) {
        return { ...state, cart: [...carts] };
      }

      console.log(state.cart);

      return { ...state, cart: [...state.cart, cartAdd] };

    default:
      return state;
  }
};

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    // admin: persistReducer(adminPersistConfig, adminReducer),
    user: persistReducer(userPersistConfig, userReducer),
    app: appReducer,
    rootReducer,
  });

//   export default rootReducer;
