export interface Meal {
  id: number
  menuId: number
  name: string
  description: string
  amount: number
  amountCy: string
  types: string[]
  preferences: string[]
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
    types: [],
    preferences: [],
    quantity: 0
  };
};
