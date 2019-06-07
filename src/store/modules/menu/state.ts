import { Menu, menuInitialState } from '@/model/menu';


export interface MenuState {
  menuDetail: Menu;
  menus: Menu[];
}

export const initialState = (): MenuState => {
  return {
    menuDetail: menuInitialState(),
    menus: []
  };
};
