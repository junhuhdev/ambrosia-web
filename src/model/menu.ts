import { Meal } from '@/model/meal';

export interface Menu {
  id: number
  restaurantId: number
  category: string
  meals: Meal[]
}
