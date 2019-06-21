import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/store';
import {
  ADD_TO_CART,
  CLEAR_CART, DECREMENT_CART_ITEM,
  GET_ALL_CART_ITEMS,
  INCREMENT_CART_ITEM,
  REMOVE_FROM_CART
} from '@/store/modules/cart/types';
import { CartState } from '@/store/modules/cart/state';
import { Meal } from '@/model/meal';

export const actions: ActionTree<CartState, RootState> = {
  getAllCartItems({commit}: ActionContext<CartState, RootState>) {
    commit(GET_ALL_CART_ITEMS);
  },

  addToCart({state, rootState, commit}: ActionContext<CartState, RootState>, meal: Meal): void {
    const existingMeal = state.added.find((existingMeal) => existingMeal.id == meal.id);
    if (!existingMeal) {
      commit(ADD_TO_CART, meal);
    } else {
      commit(INCREMENT_CART_ITEM, existingMeal);
    }
  },

  removeFromCart({state, rootState, commit}: ActionContext<CartState, RootState>, meal: Meal): void {
    const existingMeal = state.added.find((existingMeal) => existingMeal.id == meal.id);
    if (existingMeal && existingMeal.quantity == 1) {
      commit(REMOVE_FROM_CART, existingMeal);
    }
    if (existingMeal) {
      commit(DECREMENT_CART_ITEM, existingMeal);
    }
  },

  clearCart({commit}: ActionContext<CartState, RootState>): void {
    commit(CLEAR_CART);
  }
};

