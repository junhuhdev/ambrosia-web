import { Menu } from '@/model/model';

export const menuInitialState = (): Menu => {
  return {
    id: 0,
    restaurantId: 0,
    category: 'BAR',
    meals: [],
    created: new Date(),
    createdBy: '',
    updated: new Date(),
    updatedBy: ''
  };
};
