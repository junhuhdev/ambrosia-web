import { GetterTree } from 'vuex';
import { MealState } from '@/store/modules/meal/state';
import { RootState } from '@/store/store';
import { MenuState } from '@/store/modules/menu';


export const getters: GetterTree<MealState, RootState> = {

  meals: (state: MealState, getters: any, rootState: RootState, rootGetters: any) => {
    return state.meals;
  },

  mealDetails: (state: MealState, getters: any, rootState: RootState, rootGetters: any) => {
    return state.mealDetail;
  }

};
