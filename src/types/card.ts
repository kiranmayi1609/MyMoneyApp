export type CardComponentProps = {
  bank: string;
  cardNumber: string;
  type: 'Visa' | 'Mastercard' | 'RuPay' | string;
};