export interface SearchState {
  searchResult: any
}

export const initialState = (): SearchState => {
  return {
    searchResult: null
  };
};
