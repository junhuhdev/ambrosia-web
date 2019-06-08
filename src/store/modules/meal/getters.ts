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
  },

  typeOptions: (state: MealState, getters: any, rootState: RootState, rootGetters: any) => {
    if (!state.metadata || !state.metadata.types) {
      return [];
    }
    return state.metadata.types.map((type: any) => {
      return {
        value: type,
        text: type
      };
    });
  },

  preferenceOptions: (state: MealState, getters: any, rootState: RootState, rootGetters: any) => {
    if (!state.metadata || !state.metadata.preferences) {
      return [];
    }
    return state.metadata.preferences.map((preference: any) => {
      return {
        value: preference,
        text: preference
      };
    });
  }

};
