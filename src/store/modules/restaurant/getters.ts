import { GetterTree } from 'vuex';
import { RestaurantState } from '@/store/modules/restaurant/state';
import { RootState } from '@/store/store';


export const getters: GetterTree<RestaurantState, RootState> = {

  restaurants: (state: RestaurantState, getters: any, rootState: RootState, rootGetters: any) => {
    return state.restaurants;
  },

  restaurantsOption: (state: RestaurantState, getters: any, rootState: RootState, rootGetters: any) => {
    return state.restaurants.map(restaurant => {
      return {
        value: restaurant.id,
        text: restaurant.name
      }
    })
  },

  restaurantDetails: (state: RestaurantState, getters: any, rootState: RootState, rootGetters: any) => {
    return state.restaurantDetail;
  },

};
