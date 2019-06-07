import { ActionContext, ActionTree } from 'vuex';
import { MenuState } from '@/store/modules/menu/state';
import { RootState } from '@/store/store';
import { Menu } from '@/model/menu';
import axios from 'axios';
import { CREATE_MENU_DETAILS, GET_ALL_MENU_CATEGORIES } from '@/store/modules/menu/types';


export const actions: ActionTree<MenuState, RootState> = {

  getAllMenus({commit}: ActionContext<MenuState, RootState>): void {

  },

  getMenuDetails({commit}: ActionContext<MenuState, RootState>, id: number): void {

  },

  getAllMenuCategories({commit}: ActionContext<MenuState, RootState>): void {
    axios.get(`http://localhost:9000/menus/categories`)
      .then(response => {
        commit(GET_ALL_MENU_CATEGORIES, response.data);
      })
      .catch(e => {
        console.log(e);
      });
  },

  createMenuDetails({commit}: ActionContext<MenuState, RootState>, payload: Menu): void {
    axios.post(`http://localhost:9000/menus`, payload)
      .then(response => {
        commit(CREATE_MENU_DETAILS, response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

};
