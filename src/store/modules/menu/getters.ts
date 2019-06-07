import { GetterTree } from 'vuex';
import { MenuState } from '@/store/modules/menu/state';
import { RootState } from '@/store/store';


export const getters: GetterTree<MenuState, RootState> = {

  menus: (state: MenuState, getters: any, rootState: RootState, rootGetters: any) => {
    return state.menus;
  },

  menuDetails: (state: MenuState, getters: any, rootState: RootState, rootGetters: any) => {
    return state.menuDetail;
  },

  menuCategories: (state: MenuState, getters: any, rootState: RootState, rootGetters: any) => {
    return state.categories;
  }

};
