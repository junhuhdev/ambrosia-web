import { Restaurant } from '@/model/model';
import { restaurantInitialState } from '@/model/model-initialstate';


export interface RestaurantState {
  restaurantDetail: Restaurant;
  restaurants: Restaurant[];
}

export const initialState = (): RestaurantState => {
  return {
    restaurantDetail: restaurantInitialState(),
    restaurants: []
  };
};
