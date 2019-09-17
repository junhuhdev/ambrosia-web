import { GetterTree } from 'vuex';
import { DialogState } from '@/store/modules/dialog/state';
import { RootState } from '@/store/store';


export const getters: GetterTree<DialogState, RootState> = {

  openMealDetailDialog: (state: DialogState, getters: any, rootState: RootState, rootGetters: any) => {
    return state.openMealDialog;
  }

};
