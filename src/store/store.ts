import Vue from 'vue';
import Vuex from 'vuex';
import * as cart from '@/store/modules/cart';
import * as restaurant from '@/store/modules/restaurant';

Vue.use(Vuex);

export interface RootState {
  cart: cart.CartState,
  restaurant: restaurant.RestaurantState
}

export default new Vuex.Store<RootState>({
  modules: {
    cart: cart.store,
    restaurant: restaurant.store
  },
  strict: true
});
