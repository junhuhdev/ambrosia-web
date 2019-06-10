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
    const types: any = [];
    state.metadata.types.map((type: any) => {
      types.push(type);
    });
    return types;
  },

  preferenceOptions: (state: MealState, getters: any, rootState: RootState, rootGetters: any) => {
    if (!state.metadata || !state.metadata.preferences) {
      return [];
    }
    const preferences: any = [];
    state.metadata.preferences.map((preference: any) => {
      preferences.push(preference);
    });
    return preferences;
  }

};
