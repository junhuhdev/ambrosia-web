import { Meal } from '@/model/model';
import { mealInitialState } from '@/model/model-initialstate';


export interface MealState {
  mealDetail: Meal;
  meals: Meal[];
  metadata: any;
}

export const initialState = (): MealState => {
  return {
    mealDetail: mealInitialState(),
    meals: [],
    metadata: null
  };
};
