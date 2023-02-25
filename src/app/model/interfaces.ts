// TODO: refactor
export interface Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
    img: string;
  }
  
  export interface Category {
    id: number;
    name: string;
  }
  
  export enum DiscountOffers {
    NoDiscount = 'No Discount',
    TenPercent = '10%',
    FifteenPercent = '15%',
  }
  