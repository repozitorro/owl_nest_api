export class ProductModel {
  _id: string;
  image: string;
  title: string;
  price: number;
  aldPrice: number;
  credit: number;
  description: string;
  calculatedRating: number;
  advantages: string;
  disAdvantages: string;
  categories: string[];
  tags: string;
  characteristics: {
    [key: string]: string;
  };
}
