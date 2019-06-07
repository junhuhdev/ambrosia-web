import { MutationTree } from 'vuex';
import { MenuState } from '@/store/modules/menu/state';
import {
  CREATE_MENU_DETAILS,
  GET_ALL_MENU_CATEGORIES,
  GET_ALL_MENUS,
  GET_MENU_DETAILS
} from '@/store/modules/menu/types';
import { Menu } from '@/model/menu';


export const mutations: MutationTree<MenuState> = {

  [GET_ALL_MENUS]: (state: MenuState, payload: Menu[]) => {
    state.menus = payload;
  },

  [GET_MENU_DETAILS]: (state: MenuState, payload: Menu) => {
    state.menuDetail = payload;
  },

  [GET_ALL_MENU_CATEGORIES]: (state: MenuState, payload: string[]) => {
    state.categories = payload;
  },

  [CREATE_MENU_DETAILS]: (state: MenuState, payload: Menu) => {

  }

};
