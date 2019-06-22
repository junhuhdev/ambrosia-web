import { MutationTree } from 'vuex';
import { MealState } from '@/store/modules/meal/state';
import { INSERT_MEAL, SELECT_MEALS, SELECT_MEAL, SELECT_MEAL_METADATA } from '@/store/modules/meal/types';
import { Meal } from '@/model/meal';


export const mutations: MutationTree<MealState> = {

  [SELECT_MEALS]: (state: MealState, payload: Meal[]) => {
    state.meals = payload;
  },

  [SELECT_MEAL]: (state: MealState, payload: Meal) => {
    state.mealDetail = payload;
  },

  [INSERT_MEAL]: (state: MealState, payload: Meal) => {

  },

  [SELECT_MEAL_METADATA]: (state: MealState, payload: any) => {
    state.metadata = payload;
  }

};
