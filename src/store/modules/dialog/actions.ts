import { ActionContext, ActionTree } from 'vuex';
import { DialogState } from '@/store/modules/dialog/state';
import { RootState } from '@/store/store';
import { CLOSE_MEAL_DETAIL_DIALOG, SHOW_MEAL_DIALOG } from '@/store/modules/dialog/types';


export const actions: ActionTree<DialogState, RootState> = {

  async openMealDetailDialogAction({commit}: ActionContext<DialogState, RootState>): Promise<any> {
    commit(SHOW_MEAL_DIALOG, true);
    return true;
  },

  async closeMealDetailDialogAction({commit}: ActionContext<DialogState, RootState>): Promise<any> {
    commit(SHOW_MEAL_DIALOG, false);
    return false;
  },


};
