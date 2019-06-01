import Vue from 'vue';
import Vuex from 'vuex';
import * as cart from '@/store/modules/cart';

Vue.use(Vuex);

export interface RootState {
  cart: cart.CartState
}

export default new Vuex.Store<RootState>({
  modules: {
    cart: cart.store
  },
  strict: true
});
