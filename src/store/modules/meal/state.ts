import { Meal, mealInitialState } from '@/model/meal';


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
