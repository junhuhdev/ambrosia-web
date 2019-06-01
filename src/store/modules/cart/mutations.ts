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
      state.added.push(payload);
      // state.added = [...state.added, {payload}];
    }
  },

  [INCREMENT_CART_ITEM]: (state: CartState, payload: Meal) => {
    // const record = state.added.find((p) => p.id == payload.id);
    // if (record) {
    //   record.quantity++;
    // }
    payload.quantity++;
    state.added = [
      ...state.added.filter(e => e.id !== payload.id),
      payload
    ]

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
