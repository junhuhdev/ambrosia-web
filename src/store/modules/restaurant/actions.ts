import { ActionContext, ActionTree } from 'vuex';
import { RestaurantState } from '@/store/modules/restaurant/state';
import { RootState } from '@/store/store';
import {
  INSERT_RESTAURANT,
  SELECT_RESTAURANTS,
  SELECT_RESTAURANT, UPDATE_RESTAURANT, UPLOAD_IMAGE_RESTAURANT, DELETE_RESTAURANT
} from '@/store/modules/restaurant/types';
import axios from 'axios';
import { Restaurant } from '@/model/model';


export const actions: ActionTree<RestaurantState, RootState> = {

  async selectRestaurants({commit}: ActionContext<RestaurantState, RootState>): Promise<any> {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/restaurants`);
    commit(SELECT_RESTAURANTS, response.data);
    return response.data;
  },

  async selectRestaurant({commit}: ActionContext<RestaurantState, RootState>, id: number): Promise<any> {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/restaurants/${id}`);
    commit(SELECT_RESTAURANT, response.data);
    return response.data;
  },

  async insertRestaurant({commit}: ActionContext<RestaurantState, RootState>, payload: Restaurant): Promise<any> {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/restaurants`, payload);
    commit(INSERT_RESTAURANT, response.data);
    return response.data;
  },

  async updateRestaurant({commit}: ActionContext<RestaurantState, RootState>, payload: Restaurant): Promise<any> {
    const response = await axios.put(`${process.env.VUE_APP_BACKEND_URL}/restaurants/${payload.id}`, payload);
    commit(UPDATE_RESTAURANT, response.data);
    return response.data;
  },

  async deleteRestaurant({commit}: ActionContext<RestaurantState, RootState>, id: number): Promise<any> {
    const response = await axios.delete(`${process.env.VUE_APP_BACKEND_URL}/restaurants/${id}`);
    commit(DELETE_RESTAURANT, response.data);
    return response.data;
  },

  async uploadImageRestaurant({commit, dispatch}: ActionContext<RestaurantState, RootState>, payload: any): Promise<any> {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/images/restaurant/upload/${payload.id}`, payload.formData);
    commit(UPLOAD_IMAGE_RESTAURANT, response.data);
    return response.data;
  }

};
