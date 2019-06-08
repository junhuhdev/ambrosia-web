import { ActionContext, ActionTree } from 'vuex';
import { MealState } from '@/store/modules/meal/state';
import { RootState } from '@/store/store';
import axios from 'axios';
import { Meal } from '@/model/meal';
import { CREATE_MEAL_DETAILS, GET_MEAL_METADATA } from '@/store/modules/meal/types';


export const actions: ActionTree<MealState, RootState> = {

  getAllMeals({commit}: ActionContext<MealState, RootState>): void {

  },

  getMealDetails({commit}: ActionContext<MealState, RootState>): void {

  },

  createMealDetails({commit}: ActionContext<MealState, RootState>, payload: Meal): void {
    axios.post(`http://localhost:9000/meals`, payload)
      .then(response => {
        commit(CREATE_MEAL_DETAILS, response.data);
      })
      .catch(e => {
        console.log(e);
      });
  },

  getMealMetadata({commit}: ActionContext<MealState, RootState>): void {
    axios.get(`http://localhost:9000/meals/metadata`)
      .then(response => {
        commit(GET_MEAL_METADATA, response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

};
