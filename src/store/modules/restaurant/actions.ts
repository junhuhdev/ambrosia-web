import { ActionContext, ActionTree } from 'vuex';
import { RestaurantState } from '@/store/modules/restaurant/state';
import { RootState } from '@/store/store';
import { GET_RESTAURANT_DETAILS } from '@/store/modules/restaurant/types';
import axios from 'axios';


export const actions: ActionTree<RestaurantState, RootState> = {

  getRestaurantDetails({commit}: ActionContext<RestaurantState, RootState>, id: number): void {
    axios.get(`http://localhost:9000/restaurants/${id}`)
      .then(response => {
        commit(GET_RESTAURANT_DETAILS, response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

};
