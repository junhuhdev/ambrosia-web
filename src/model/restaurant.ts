import { Money } from '@/model/money';
import { Shipping } from '@/model/shipping';
import { Address } from '@/model/address';

export interface Restaurant {
  id: number
  name: string
  description: string
  status: string
  recipientLimit: any
  minimumOrderAmount: Money
  shipping: Shipping
  address: Address
}

export const restaurantInitialState = (): Restaurant => {
  return {
    id: 0,
    name: '',
    description: '',
    status: '',
    recipientLimit: null,
    minimumOrderAmount: {
      amount: 0,
      currency: ''
    },
    shipping: {
      shippingAmount: {
        amount: 0,
        currency: ''
      },
      shippingFreeLimit: {
        amount: 0,
        currency: ''
      },
      shippingComment: ''
    },
    address: {
      street: '',
      postalCode: '',
      country: '',
      city: '',
      state: ''
    }
  };
};
