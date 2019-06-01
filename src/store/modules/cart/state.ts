import { Meal } from '@/model/meal';

export interface CartState {
  mealsAdded: Array<Meal>;
}

export const initialState = (): CartState => {
  return {
    mealsAdded: []
  };
};
