import { ActionContext, ActionTree } from 'vuex';
import { MenuState } from '@/store/modules/menu/state';
import { RootState } from '@/store/store';
import { Menu } from '@/model/menu';
import axios from 'axios';
import {
  CREATE_MENU_DETAILS,
  GET_ALL_MENU_CATEGORIES,
  GET_ALL_MENUS,
  GET_MENU_DETAILS
} from '@/store/modules/menu/types';


export const actions: ActionTree<MenuState, RootState> = {

  getAllMenus({commit}: ActionContext<MenuState, RootState>): void {

  },

  searchMenus({commit}: ActionContext<MenuState, RootState>, restaurantId: any): void {
    const temp = `${process.env.VUE_APP_BACKEND_URL}/menus/search?restaurantId=${restaurantId}`;
    if (restaurantId) {
      axios.get(temp)
        .then(response => {
          commit(GET_ALL_MENUS, response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },

  getMenuDetails({commit}: ActionContext<MenuState, RootState>, id: number): void {
    axios.get(`${process.env.VUE_APP_BACKEND_URL}/menus/${id}`)
      .then(response => {
        commit(GET_MENU_DETAILS, response.data);
      })
      .catch(e => {
        console.log(e);
      });
  },

  getAllMenuCategories({commit}: ActionContext<MenuState, RootState>): void {
    axios.get(`${process.env.VUE_APP_BACKEND_URL}/menus/categories`)
      .then(response => {
        commit(GET_ALL_MENU_CATEGORIES, response.data);
      })
      .catch(e => {
        console.log(e);
      });
  },

  async createMenuDetails({commit}: ActionContext<MenuState, RootState>, payload: Menu): Promise<any> {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/menus`, payload);
    commit(CREATE_MENU_DETAILS, response.data);
    return response.data;
  }

};
