import { Module } from 'vuex';
import { initialState, SearchState } from '@/store/modules/search/state';
import { RootState } from '@/store/store';
import { mutations } from '@/store/modules/search/mutations';
import { actions } from '@/store/modules/search/actions';
import { getters } from '@/store/modules/search/getters';

export * from './state';


export const store: Module<SearchState, RootState> = {
  state: initialState,
  mutations,
  actions,
  getters
};
