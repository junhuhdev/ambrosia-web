import { ActionContext, ActionTree } from 'vuex';
import { RestaurantState } from '@/store/modules/restaurant/state';
import { RootState } from '@/store/store';
import {
  CREATE_RESTAURANT_DETAILS,
  GET_ALL_RESTAURANTS,
  GET_RESTAURANT_DETAILS, UPDATE_RESTAURANT_DETAILS, UPLOAD_IMAGE_RESTAURANT
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

  async getRestaurantDetails({commit}: ActionContext<RestaurantState, RootState>, id: number): Promise<any> {
    const response = await axios.get(`http://localhost:9000/restaurants/${id}`);
    commit(GET_RESTAURANT_DETAILS, response.data);
    return response.data;
  },

  async createRestaurantDetails({commit}: ActionContext<RestaurantState, RootState>, payload: Restaurant): Promise<any> {
    const response = await axios.post(`http://localhost:9000/restaurants`, payload);
    commit(CREATE_RESTAURANT_DETAILS, response.data);
    return response.data;
  },

  async updateRestaurantDetails({commit}: ActionContext<RestaurantState, RootState>, payload: Restaurant): Promise<any> {
    const response = await axios.put(`http://localhost:9000/restaurants/${payload.id}`, payload);
    commit(UPDATE_RESTAURANT_DETAILS, response.data);
    return response.data;
  },

  async uploadImageRestaurant({commit, dispatch}: ActionContext<RestaurantState, RootState>, payload: any): Promise<any> {
    const response = await axios.post(`http://localhost:9000/images/restaurant/upload/${payload.id}`, payload.formData);
    commit(UPLOAD_IMAGE_RESTAURANT, response.data);
    return response.data;
  }

};
