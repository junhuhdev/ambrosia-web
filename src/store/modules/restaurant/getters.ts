import { GetterTree } from 'vuex';
import { RestaurantState } from '@/store/modules/restaurant/state';
import { RootState } from '@/store/store';


export const getters: GetterTree<RestaurantState, RootState> = {

  restaurants: (state: RestaurantState, getters: any, rootState: RootState, rootGetters: any) => {
    return state.restaurants;
  },

  restaurantDetails: (state: RestaurantState, getters: any, rootState: RootState, rootGetters: any) => {
    return state.restaurantDetail;
  },

  restaurantDetailsMenuMeals: (state: RestaurantState, getters: any, rootState: RootState, rootGetters: any) => {
    if (!state.restaurantDetail.menus) {
      return [];
    }
    const meals: any = [];
    state.restaurantDetail.menus.map((menu: any) => {
      menu.meals.map((meal: any) => {
        meals.push({
          name: meal.name,
          description: meal.description,
          amount: meal.amount,
          amountCy: meal.amountCy,
          menu: menu.category
        });
      });
    });
    return meals;
  },

  restaurantsOption: (state: RestaurantState, getters: any, rootState: RootState, rootGetters: any) => {
    return state.restaurants.map(restaurant => {
      return {
        value: restaurant.id,
        text: restaurant.name
      };
    });
  },

};
