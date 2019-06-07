import { MutationTree } from 'vuex';
import { MealState } from '@/store/modules/meal/state';
import { CREATE_MEAL_DETAILS, GET_ALL_MEALS, GET_MEAL_DETAILS } from '@/store/modules/meal/types';
import { Meal } from '@/model/meal';


export const mutations: MutationTree<MealState> = {

  [GET_ALL_MEALS]: (state: MealState, payload: Meal[]) => {
    state.meals = payload;
  },

  [GET_MEAL_DETAILS]: (state: MealState, payload: Meal) => {
    state.mealDetail = payload;
  },

  [CREATE_MEAL_DETAILS]: (state: MealState, payload: Meal) => {

  }

};
