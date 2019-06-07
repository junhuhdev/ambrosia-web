import { Meal } from '@/model/meal';

export interface Menu {
  id: number
  restaurantId: number
  category: string
  meals: Meal[]
}


export const menuInitialState = (): Menu => {
  return {
    id: 0,
    restaurantId: 0,
    category: '',
    meals: []
  };
};
