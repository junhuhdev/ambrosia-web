import { MutationTree } from 'vuex';
import { RestaurantState } from '@/store/modules/restaurant/state';
import { CREATE_RESTAURANT_DETAILS, GET_RESTAURANT_DETAILS } from '@/store/modules/restaurant/types';
import { Restaurant } from '@/model/restaurant';


export const mutations: MutationTree<RestaurantState> = {

  [GET_RESTAURANT_DETAILS]: (state: RestaurantState, payload: Restaurant) => {
    state.restaurantDetail = payload;
  },

  [CREATE_RESTAURANT_DETAILS]: (state: RestaurantState, payload: Restaurant) => {

  },



};
