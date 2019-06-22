import { ActionContext, ActionTree } from 'vuex';
import { MenuState } from '@/store/modules/menu/state';
import { RootState } from '@/store/store';
import axios from 'axios';
import {
  INSERT_MENU,
  SELECT_MENU_CATEGORIES,
  SELECT_MENUS,
  SELECT_MENU
} from '@/store/modules/menu/types';
import { Menu } from '@/model/model';


export const actions: ActionTree<MenuState, RootState> = {

  /** READ OPERATIONS **/

  async selectMenus({commit}: ActionContext<MenuState, RootState>): Promise<any> {

  },

  async selectMenu({commit}: ActionContext<MenuState, RootState>, id: number): Promise<any> {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/menus/${id}`);
    commit(SELECT_MENU, response.data);
    return response.data;
  },

  async searchMenus({commit}: ActionContext<MenuState, RootState>, restaurantId: any): Promise<any> {
    const temp = `${process.env.VUE_APP_BACKEND_URL}/menus/search?restaurantId=${restaurantId}`;
    if (restaurantId) {
      axios.get(temp)
        .then(response => {
          commit(SELECT_MENUS, response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },

  async selectMenuCategories({commit}: ActionContext<MenuState, RootState>): Promise<any> {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/menus/categories`);
    commit(SELECT_MENU_CATEGORIES, response.data);
    return response.data;
  },

  /** WRITE OPERATIONS **/

  async insertMenu({commit}: ActionContext<MenuState, RootState>, payload: Menu): Promise<any> {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/menus`, payload);
    commit(INSERT_MENU, response.data);
    return response.data;
  }

};
