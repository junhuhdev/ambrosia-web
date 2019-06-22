import { ActionContext, ActionTree } from 'vuex';
import { OrderState } from '@/store/modules/order/state';
import { RootState } from '@/store/store';
import { Order } from '@/model/model';
import axios from 'axios';
import { DELETE_ORDER, INSERT_ORDER, SELECT_ORDER, SELECT_ORDERS, UPDATE_ORDER } from '@/store/modules/order/types';


export const actions: ActionTree<OrderState, RootState> = {

  async selectOrders({commit}: ActionContext<OrderState, RootState>): Promise<any> {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/orders`);
    commit(SELECT_ORDERS, response.data);
    return response.data;
  },

  async selectOrder({commit}: ActionContext<OrderState, RootState>, id: number): Promise<any> {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/orders/${id}`);
    commit(SELECT_ORDER, response.data);
    return response.data;

  },

  async insertOrder({commit}: ActionContext<OrderState, RootState>, payload: Order): Promise<any> {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/orders`, payload);
    commit(INSERT_ORDER, response.data);
    return response.data;
  },

  async updateOrder({commit}: ActionContext<OrderState, RootState>, payload: Order): Promise<any> {
    const response = await axios.put(`${process.env.VUE_APP_BACKEND_URL}/orders/${payload.id}`, payload);
    commit(UPDATE_ORDER, response.data);
    return response.data;
  },

  async deleteOrder({commit}: ActionContext<OrderState, RootState>, id: number): Promise<any> {
    const response = await axios.delete(`${process.env.VUE_APP_BACKEND_URL}/orders/${id}`);
    commit(DELETE_ORDER, response.data);
    return response.data;
  }


};
