import { GetterTree } from 'vuex';
import { CartState } from '@/store/modules/cart/state';
import { RootState } from '@/store/store';


export const getters: GetterTree<CartState, RootState> = {

  getCartItems: (state: CartState) => state.mealsAdded

};
