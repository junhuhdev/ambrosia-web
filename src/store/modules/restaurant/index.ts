import { Module } from 'vuex';
import { initialState, RestaurantState } from '@/store/modules/restaurant/state';
import { RootState } from '@/store/store';
import { mutations } from '@/store/modules/restaurant/mutations';
import { actions } from '@/store/modules/restaurant/actions';
import { getters } from '@/store/modules/restaurant/getters';

export * from './state';


export const store: Module<RestaurantState, RootState> = {
  state: initialState,
  mutations,
  actions,
  getters
};
