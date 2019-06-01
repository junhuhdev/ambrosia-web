import { MutationTree } from 'vuex';
import { CartState } from '@/store/modules/cart/state';
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from '@/store/modules/cart/types';
import { Meal } from '@/model/meal';


export const mutations: MutationTree<CartState> = {
  [ADD_TO_CART]: (state: CartState, payload: Meal) => {
    const record = state.mealsAdded.find((p) => p.id == payload.id);
    if (!record) {
      payload.quantity = 1;
      state.mealsAdded.push(payload);
    } else {
      payload.quantity++;
    }
  },

  [REMOVE_FROM_CART]: (state: CartState, payload: Meal) => {
    const record = state.mealsAdded.find((p) => p.id == payload.id);
    if (record) {
      state.mealsAdded.pop();
    }
  },

  [CLEAR_CART]: (state: CartState) => {
    state.mealsAdded = [];
  }

};
