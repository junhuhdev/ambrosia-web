import { MutationTree } from 'vuex';
import { RestaurantState } from '@/store/modules/restaurant/state';
import {
  INSERT_RESTAURANT,
  SELECT_RESTAURANTS,
  SELECT_RESTAURANT, UPDATE_RESTAURANT, UPLOAD_IMAGE_RESTAURANT
} from '@/store/modules/restaurant/types';
import { Restaurant } from '@/model/model';


export const mutations: MutationTree<RestaurantState> = {

  [SELECT_RESTAURANTS]: (state: RestaurantState, payload: Restaurant[]) => {
    state.restaurants = payload;
  },

  [SELECT_RESTAURANT]: (state: RestaurantState, payload: Restaurant) => {
    state.restaurantDetail = payload;
  },

  [INSERT_RESTAURANT]: (state: RestaurantState, payload: Restaurant) => {

  },

  [UPDATE_RESTAURANT]: (state: RestaurantState, payload: Restaurant) => {
    state.restaurantDetail = payload;
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
