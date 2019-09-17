import Vue from 'vue';
import Vuex from 'vuex';
import * as cart from '@/store/modules/cart';
import * as restaurant from '@/store/modules/restaurant';
import * as menu from '@/store/modules/menu';
import * as meal from '@/store/modules/meal';
import * as search from '@/store/modules/search';
import * as order from '@/store/modules/order';
import * as dialog from '@/store/modules/dialog'

Vue.use(Vuex);

export interface RootState {
  cart: cart.CartState,
  restaurant: restaurant.RestaurantState,
  menu: menu.MenuState,
  meal: meal.MealState,
  search: search.SearchState,
  order: order.OrderState,
  dialog: dialog.DialogState
}

export default new Vuex.Store<RootState>({
  modules: {
    cart: cart.store,
    restaurant: restaurant.store,
    menu: menu.store,
    meal: meal.store,
    search: search.store,
    order: order.store,
    dialog: dialog.store
  },
  strict: true
});
