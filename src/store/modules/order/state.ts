import { Order } from '@/model/model';
import { orderInitialState } from '@/model/model-initialstate';


export interface OrderState {
  order: Order;
  orders: Order[];
}

export const initialState = (): OrderState => {
  return {
    order: orderInitialState(),
    orders: []
  };
};
