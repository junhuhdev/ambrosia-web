import { Restaurant, restaurantInitialState } from '@/model/restaurant';


export interface RestaurantState {
  restaurantDetail: Restaurant;
}

export const initialState = (): RestaurantState => {
  return {
    restaurantDetail: restaurantInitialState()
  };
};
