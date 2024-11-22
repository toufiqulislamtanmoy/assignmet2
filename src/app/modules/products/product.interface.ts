// type definition for bicycle type
type BicycleType = 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
// interface for product
export interface IProduct {
  name: string;
  brand: string;
  price: number;
  type: BicycleType;
  description: string;
  quantity: number;
  inStock: boolean;
}