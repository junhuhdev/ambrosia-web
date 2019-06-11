import { GetterTree } from 'vuex';
import { SearchState } from '@/store/modules/search/state';
import { RootState } from '@/store/store';


export const getters: GetterTree<SearchState, RootState> = {

  searchResult: (state: SearchState, getters: any, rootState: RootState, rootGetters: any) => {
    return state.searchResult;
  }

};
