import { ActionContext, ActionTree } from 'vuex';
import { SearchState } from '@/store/modules/search/state';
import { RootState } from '@/store/store';
import axios from 'axios';
import { GET_SEARCH_RESULT } from '@/store/modules/search/types';

export const actions: ActionTree<SearchState, RootState> = {

  async doSearch({commit}: ActionContext<SearchState, RootState>, searchQuery: any): Promise<any> {
    const response = await axios.get(`http://localhost:9000/restaurants/${searchQuery}`);
    commit(GET_SEARCH_RESULT, response.data);
    return response.data;
  }

};
