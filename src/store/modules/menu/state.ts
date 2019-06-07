import { Menu, menuInitialState } from '@/model/menu';


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
