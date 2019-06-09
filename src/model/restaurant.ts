import { Money } from '@/model/money';
import { Shipping } from '@/model/shipping';
import { Address } from '@/model/address';
import { RangeLimit } from '@/model/rangelimit';
import { Menu } from '@/model/menu';

export interface Restaurant {
  id: number
  name: string
  description: string
  status: string
  recipientLimit: RangeLimit
  minimumOrderAmount: Money
  shipping: Shipping
  address: Address
  imageUrl: string
  menus: Menu[]
}

export const restaurantStatusOptions = (): any => {
  return [
    {value: 'ACTIVE', text: 'ACTIVE'},
    {value: 'INACTIVE', text: 'INACTIVE'}
  ];
};

export const restaurantInitialState = (): Restaurant => {
  return {
    id: 0,
    name: '',
    description: '',
    status: '',
    recipientLimit: {
      from: 0,
      to: 100
    },
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
    },
    imageUrl: '',
    menus: []
  };
};
