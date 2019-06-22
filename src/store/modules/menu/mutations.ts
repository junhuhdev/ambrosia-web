import { MutationTree } from 'vuex';
import { MenuState } from '@/store/modules/menu/state';
import {
  INSERT_MENU,
  SELECT_MENU_CATEGORIES,
  SELECT_MENUS,
  SELECT_MENU
} from '@/store/modules/menu/types';
import { Menu } from '@/model/model';


export const mutations: MutationTree<MenuState> = {

  [SELECT_MENUS]: (state: MenuState, payload: Menu[]) => {
    state.menus = payload;
  },

  [SELECT_MENU]: (state: MenuState, payload: Menu) => {
    state.menuDetail = payload;
  },

  [SELECT_MENU_CATEGORIES]: (state: MenuState, payload: string[]) => {
    state.categories = payload;
  },

  [INSERT_MENU]: (state: MenuState, payload: Menu) => {

  }

};
