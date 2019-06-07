import { Meal, mealInitialState } from '@/model/meal';


export interface MealState {
  mealDetail: Meal;
  meals: Meal[];
}

export const initialState = (): MealState => {
  return {
    mealDetail: mealInitialState(),
    meals: []
  };
};
