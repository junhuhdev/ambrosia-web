import { Money } from '@/model/money';

export interface Shipping {
  shippingAmount: Money
  shippingFreeLimit: Money
  shippingComment: string
}
