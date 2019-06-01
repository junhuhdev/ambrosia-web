interface Meal {
    id: number
    menuId: number
    name: string
    description: string
    amount: number
    amountCy: string
    created: string
    updated: string
}

export interface CartState {
    meals: Array<Meal>;
}

export const initialState = (): CartState => {
    return {
        meals: []
    };
};
