import { ActionContext, ActionTree } from 'vuex';
import { MealState } from '@/store/modules/meal/state';
import { RootState } from '@/store/store';
import axios from 'axios';
import { Meal } from '@/model/meal';
import { DELETE_MEAL, INSERT_MEAL, SELECT_MEAL, SELECT_MEAL_METADATA, UPDATE_MEAL } from '@/store/modules/meal/types';


export const actions: ActionTree<MealState, RootState> = {

  async selectMeals({commit}: ActionContext<MealState, RootState>): Promise<any> {

  },

  async selectMeal({commit}: ActionContext<MealState, RootState>, mealId: number): Promise<any> {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/meals/${mealId}`);
    commit(SELECT_MEAL, response.data);
    return response.data;
  },

  async selectMealMetadata({commit}: ActionContext<MealState, RootState>): Promise<any> {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/meals/metadata`);
    commit(SELECT_MEAL_METADATA, response.data);
    return response.data;
  },

  async insertMeal({commit}: ActionContext<MealState, RootState>, payload: Meal): Promise<any> {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/meals`, payload);
    commit(INSERT_MEAL, response.data);
    return response.data;
  },

  async updateMeal({commit}: ActionContext<MealState, RootState>, payload: Meal): Promise<any> {
    const response = await axios.put(`${process.env.VUE_APP_BACKEND_URL}/meals/${payload.id}`, payload);
    commit(UPDATE_MEAL, response.data);
    return response.data;
  },

  async deleteMeal({commit}: ActionContext<MealState, RootState>, id: number): Promise<any> {
    const response = await axios.delete(`${process.env.VUE_APP_BACKEND_URL}/meals/${id}`);
    commit(DELETE_MEAL, response.data);
    return response.data;
  }

};
