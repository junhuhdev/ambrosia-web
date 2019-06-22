import { MutationTree } from 'vuex';
import { OrderState } from '@/store/modules/order/state';
import { SELECT_ORDER, SELECT_ORDERS } from '@/store/modules/order/types';
import { Order } from '@/model/model';


export const mutations: MutationTree<OrderState> = {

  [SELECT_ORDERS]: (state: OrderState, payload: Order[]) => {
    state.orders = payload;
  },

  [SELECT_ORDER]: (state: OrderState, payload: Order) => {
    state.order = payload;
  },


};
