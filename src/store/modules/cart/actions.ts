import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/store';
import {
  ADD_TO_CART,
  CLEAR_CART,
  GET_ALL_CART_ITEMS,
  INCREMENT_CART_ITEM,
  REMOVE_FROM_CART
} from '@/store/modules/cart/types';
import { CartState } from '@/store/modules/cart/state';

export const actions: ActionTree<CartState, RootState> = {
  getAllCartItems({commit}: ActionContext<CartState, RootState>) {
    commit(GET_ALL_CART_ITEMS);
  },

  addToCart({state, rootState, commit}: ActionContext<CartState, RootState>, meal: any): void {
    const record = state.added.find((p) => p.id == meal.id);
    if (!record) {
      commit(ADD_TO_CART, meal);
    } else {
      commit(INCREMENT_CART_ITEM, meal);
    }
  },

  removeFromCart({commit}: ActionContext<CartState, RootState>, meal: any): void {
    commit(REMOVE_FROM_CART, meal);
  },

  clearCart({commit}: ActionContext<CartState, RootState>): void {
    commit(CLEAR_CART);
  }
};

