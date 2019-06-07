import Vue from 'vue';
import Vuex from 'vuex';
import * as cart from '@/store/modules/cart';
import * as restaurant from '@/store/modules/restaurant';
import * as menu from '@/store/modules/menu';

Vue.use(Vuex);

export interface RootState {
  cart: cart.CartState,
  restaurant: restaurant.RestaurantState,
  menu: menu.MenuState
}

export default new Vuex.Store<RootState>({
  modules: {
    cart: cart.store,
    restaurant: restaurant.store,
    menu: menu.store
  },
  strict: true
});
