export interface Money {
  amount: number
  currency: string
}

export const currencyOptions = (): any => {
  return [
    {value: 'SEK', text: 'SEK'},
    {value: 'NOK', text: 'NOK'},
    {value: 'EUR', text: 'EUR'}
  ];
};
