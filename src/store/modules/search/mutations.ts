import { MutationTree } from 'vuex';
import { SearchState } from '@/store/modules/search/state';
import { GET_SEARCH_RESULT } from '@/store/modules/search/types';


export const mutations: MutationTree<SearchState> = {

  [GET_SEARCH_RESULT]: (state: SearchState, payload: any) => {
    state.searchResult = payload;
  }

};
