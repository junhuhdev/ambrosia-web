import { MutationTree } from 'vuex';
import { CartState } from '@/store/modules/cart/state';
import {
  ADD_TO_CART,
  CLEAR_CART,
  GET_ALL_CART_ITEMS,
  INCREMENT_CART_ITEM,
  REMOVE_FROM_CART
} from '@/store/modules/cart/types';
import { Meal } from '@/model/meal';


export const mutations: MutationTree<CartState> = {

  [ADD_TO_CART]: (state: CartState, payload: Meal) => {
    const record = state.added.find((p) => p.id == payload.id);
    if (!record) {
      payload.quantity = 1;
      state.added = [...state.added, payload];
    }
  },

  [INCREMENT_CART_ITEM]: (state: CartState, payload: Meal) => {
    state.added = state.added.map(meal => {
      if (meal.id === payload.id) {
        console.log('PAYLOAD ' + JSON.stringify(payload));
        payload.quantity++;
        return Object.assign({}, meal, payload);
      }
      return meal;
    });
  },

  [REMOVE_FROM_CART]: (state: CartState, payload: Meal) => {
    const record = state.added.find((p) => p.id == payload.id);
    if (record) {
      state.added.pop();
    }
  },

  [CLEAR_CART]: (state: CartState) => {
    state.added = [];
  }

};
