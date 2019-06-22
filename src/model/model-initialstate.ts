import { Meal, Menu, Order, Restaurant } from '@/model/model';

export const orderInitialState = (): Order => {
  return  {
    id: 0,
    customer: {
      id: 0,
      company: {
        id: 0,
        city: '',
        customerId: 0,
        name: '',
        organisationNumber: '',
        postalCode: '',
        state: '',
        street: ''
      },
      delivery: {
        id: 0,
        city: '',
        customerId: 0,
        expectedDate: new Date(),
        invoiceComment: '',
        postalCode: '',
        state: '',
        street: ''
      },
      email: '',
      name: '',
      phone: ''
    },
    deliveryAmount: 0,
    deliveryAmountCy: '',
    totalAmount: 0,
    totalAmountCy: '',
    items: [],
    created: new Date(),
    createdBy: '',
    updated: new Date(),
    updatedBy: ''
  }
}

export const menuInitialState = (): Menu => {
  return {
    id: 0,
    restaurantId: 0,
    category: 'BAR',
    meals: [],
    created: new Date(),
    createdBy: '',
    updated: new Date(),
    updatedBy: ''
  };
};

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
    created: new Date(),
    updated: new Date(),
    createdBy: '',
    updatedBy: '',
    quantity: 0,
    imageUrl: '',
  };
};

export const restaurantInitialState = (): Restaurant => {
  return {
    id: 0,
    name: '',
    description: '',
    shortDescription: '',
    status: 'ACTIVE',
    address: {
      id: 0,
      street: '',
      city: '',
      country: '',
      postalCode: '',
      state: ''
    },
    menus: [],
    shipping: {
      shippingComment: '',
      shippingFreeLimit: {
        amount: 0,
        currency: ''
      },
      shippingAmount: {
        amount: 0,
        currency: ''
      }
    },
    imageUrl: '',
    openingHours: [],
    recipientLimit: {
      from: 0,
      to: 0
    },
    minimumOrderAmount: {
      amount: 0,
      currency: ''
    },
    created: new Date(),
    createdBy: '',
    updated: new Date(),
    updatedBy: ''
  };
};

export const restaurantStatusOptions = (): any => {
  return [
    {value: 'ACTIVE', text: 'ACTIVE'},
    {value: 'INACTIVE', text: 'INACTIVE'}
  ];
};
