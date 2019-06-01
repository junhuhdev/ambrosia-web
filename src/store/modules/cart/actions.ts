import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/store';
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from '@/store/modules/cart/types';
import { CartState } from '@/store/modules/cart/state';

export const actions: ActionTree<CartState, RootState> = {
  addToCart({commit}: ActionContext<CartState, RootState>, meal: any): void {
    commit(ADD_TO_CART, meal);
  },

  removeFromCart({commit}: ActionContext<CartState, RootState>, meal: any): void {
    commit(REMOVE_FROM_CART, meal);
  },

  clearCart({commit}: ActionContext<CartState, RootState>): void {
    commit(CLEAR_CART);
  }
};

