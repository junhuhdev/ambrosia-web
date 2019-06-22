import { initialState, OrderState } from '@/store/modules/order/state';
import { RootState } from '@/store/store';
import { Module } from 'vuex';
import { actions } from '@/store/modules/order/actions';
import { mutations } from '@/store/modules/order/mutations';
import { getters } from '@/store/modules/order/getters';


export * from './state';

export const store: Module<OrderState, RootState> = {
  state: initialState,
  mutations,
  actions,
  getters
};
