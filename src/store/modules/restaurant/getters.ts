import { GetterTree } from 'vuex';
import { RestaurantState } from '@/store/modules/restaurant/state';
import { RootState } from '@/store/store';


export const getters: GetterTree<RestaurantState, RootState> = {

  restaurantDetails: (state: RestaurantState, getters: any, rootState: RootState, rootGetters: any) => {
    return state.restaurantDetail;
  }

};
