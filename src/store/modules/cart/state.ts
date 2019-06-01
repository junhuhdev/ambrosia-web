import { Meal } from '@/model/meal';

export interface CartState {
  added: Array<Meal>;
}

export const initialState = (): CartState => {
  return {
    added: []
  };
};
