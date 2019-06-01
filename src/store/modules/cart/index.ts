import { Module } from 'vuex';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';
import { RootState } from '@/store/store';
import { initialState, CartState } from '@/store/modules/cart/state';

export * from './state';

export const store: Module<CartState, RootState> = {
 state: initialState,
 mutations,
 actions,
 getters
};
