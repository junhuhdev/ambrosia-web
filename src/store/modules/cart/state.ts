import { Meal } from '@/model/meal';

export interface CartState {
  added: Meal[];
}

export const initialState = (): CartState => {
  return {
    added: []
  };
};
