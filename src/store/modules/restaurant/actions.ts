import { ActionContext, ActionTree } from 'vuex';
import { RestaurantState } from '@/store/modules/restaurant/state';
import { RootState } from '@/store/store';
import {
  CREATE_RESTAURANT_DETAILS,
  GET_ALL_RESTAURANTS,
  GET_RESTAURANT_DETAILS
} from '@/store/modules/restaurant/types';
import axios from 'axios';
import { Restaurant } from '@/model/restaurant';


export const actions: ActionTree<RestaurantState, RootState> = {

  getAllRestaurants({commit}: ActionContext<RestaurantState, RootState>): void {
    axios.get('http://localhost:9000/restaurants')
      .then(response => {
        commit(GET_ALL_RESTAURANTS, response.data);
      })
      .catch(e => {
        console.log(e);
      });
  },

  getRestaurantDetails({commit}: ActionContext<RestaurantState, RootState>, id: number): void {
    axios.get(`http://localhost:9000/restaurants/${id}`)
      .then(response => {
        commit(GET_RESTAURANT_DETAILS, response.data);
      })
      .catch(e => {
        console.log(e);
      });
  },

  createRestaurantDetails({commit}: ActionContext<RestaurantState, RootState>, payload: Restaurant): void {
    axios.post(`http://localhost:9000/restaurants`, payload)
      .then(response => {
        commit(CREATE_RESTAURANT_DETAILS, response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

};
