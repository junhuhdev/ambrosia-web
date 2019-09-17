export interface DialogState {
  openMealDialog: Boolean;
}

export const initialState = (): DialogState => {
  return {
    openMealDialog: false
  };
};
