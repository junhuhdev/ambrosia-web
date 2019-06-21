import { Menu } from '@/model/model';
import { menuInitialState } from '@/model/model-initialstate';


export interface MenuState {
  menuDetail: Menu;
  menus: Menu[];
  categories: string[];
}

export const initialState = (): MenuState => {
  return {
    menuDetail: menuInitialState(),
    menus: [],
    categories: []
  };
};
