export interface Meal {
  id: number
  menuId: number
  name: string
  description: string
  amount: number
  amountCy: string
  quantity: number
}

export const mealInitialState = (): Meal => {
  return {
    id: 0,
    menuId: 0,
    name: '',
    description: '',
    amount: 0,
    amountCy: '',
    quantity: 0
  };
};
