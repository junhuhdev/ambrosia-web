import { Module } from 'vuex';
import { initialState, MealState } from '@/store/modules/meal/state';
import { RootState } from '@/store/store';
import { mutations } from '@/store/modules/meal/mutations';
import { actions } from '@/store/modules/meal/actions';
import { getters } from '@/store/modules/meal/getters';

export * from './state';

export const store: Module<MealState, RootState> = {
  state: initialState,
  mutations,
  actions,
  getters
};
