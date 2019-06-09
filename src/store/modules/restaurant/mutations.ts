import { MutationTree } from 'vuex';
import { RestaurantState } from '@/store/modules/restaurant/state';
import {
  CREATE_RESTAURANT_DETAILS,
  GET_ALL_RESTAURANTS,
  GET_RESTAURANT_DETAILS, UPLOAD_IMAGE_RESTAURANT
} from '@/store/modules/restaurant/types';
import { Restaurant } from '@/model/restaurant';


export const mutations: MutationTree<RestaurantState> = {

  [GET_ALL_RESTAURANTS]: (state: RestaurantState, payload: Restaurant[]) => {
    state.restaurants = payload;
  },

  [GET_RESTAURANT_DETAILS]: (state: RestaurantState, payload: Restaurant) => {
    state.restaurantDetail = payload;
  },

  [CREATE_RESTAURANT_DETAILS]: (state: RestaurantState, payload: Restaurant) => {

  },

  [UPLOAD_IMAGE_RESTAURANT]: (state: RestaurantState, payload: Restaurant) => {
    state.restaurants = state.restaurants.map(restaurant => {
      if (restaurant.id === payload.id) {
        return Object.assign({}, restaurant, payload);
      }
      return restaurant;
    });
  }


};
