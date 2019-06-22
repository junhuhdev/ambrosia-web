import { Meal } from '@/model/model';

export interface CartState {
  added: Meal[];
}

export const initialState = (): CartState => {
  return {
    added: []
  };
};
