import { Module } from 'vuex';
import { initialState, MenuState } from '@/store/modules/menu/state';
import { RootState } from '@/store/store';
import { mutations } from '@/store/modules/menu/mutations';
import { actions } from '@/store/modules/menu/actions';
import { getters } from '@/store/modules/menu/getters';

export * from './state';

export const store: Module<MenuState, RootState> = {
  state: initialState,
  mutations,
  actions,
  getters
};
