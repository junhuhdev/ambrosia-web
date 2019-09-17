import { MutationTree } from 'vuex';
import { DialogState } from '@/store/modules/dialog/state';
import { SHOW_MEAL_DIALOG } from '@/store/modules/dialog/types';


export const mutations: MutationTree<DialogState> = {

  [SHOW_MEAL_DIALOG]: (state: DialogState, payload: any) => {
    state.openMealDialog = payload;
  }

};
