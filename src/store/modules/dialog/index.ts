import { DialogState, initialState } from '@/store/modules/dialog/state';
import { RootState } from '@/store/store';
import { Module } from 'vuex';
import { getters } from '@/store/modules/dialog/getters';
import { actions } from '@/store/modules/dialog/actions';
import { mutations } from '@/store/modules/dialog/mutations';

export * from './state';

export const store: Module<DialogState, RootState> = {
  state: initialState,
  mutations,
  actions,
  getters
};
