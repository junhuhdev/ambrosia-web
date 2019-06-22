import { GetterTree } from 'vuex';
import { OrderState } from '@/store/modules/order/state';
import { RootState } from '@/store/store';


export const getters: GetterTree<OrderState, RootState> = {

  order: (state: OrderState, getters: any, rootState: RootState, rootGetters: any) => {

  },

  orders: (state: OrderState, getters: any, rootState: RootState, rootGetters: any) => {

  }

};
