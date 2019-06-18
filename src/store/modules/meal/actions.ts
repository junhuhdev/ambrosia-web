import { ActionContext, ActionTree } from 'vuex';
import { MealState } from '@/store/modules/meal/state';
import { RootState } from '@/store/store';
import axios from 'axios';
import { Meal } from '@/model/meal';
import { CREATE_MEAL_DETAILS, GET_MEAL_DETAILS, GET_MEAL_METADATA } from '@/store/modules/meal/types';


export const actions: ActionTree<MealState, RootState> = {

  async getAllMeals({commit}: ActionContext<MealState, RootState>): Promise<any> {

  },

  async getMealDetails({commit}: ActionContext<MealState, RootState>, mealId: number): Promise<any> {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/meals/${mealId}`);
    commit(GET_MEAL_DETAILS, response.data);
    return response.data;
  },

  async createMealDetails({commit}: ActionContext<MealState, RootState>, payload: Meal): Promise<any> {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/meals`, payload);
    commit(CREATE_MEAL_DETAILS, response.data);
    return response.data;
  },

  async getMealMetadata({commit}: ActionContext<MealState, RootState>): Promise<any> {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/meals/metadata`);
    commit(GET_MEAL_METADATA, response.data);
    return response.data;
  }

};
