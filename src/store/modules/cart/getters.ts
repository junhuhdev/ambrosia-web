import { GetterTree } from 'vuex';
import { CartState } from '@/store/modules/cart/state';
import { RootState } from '@/store/store';
import { Meal } from '@/model/model';


export const getters: GetterTree<CartState, RootState> = {

  cartItems: (state: CartState, getters: any, rootState: RootState, rootGetters: any) => {
    return rootState.cart.added;
  },

  cartTotal: (state, getters) => {
    let total = 0;
    getters.cartItems.forEach((item: Meal) => {
      total += item.amount * item.quantity;
    });
    return total;
  }

};
