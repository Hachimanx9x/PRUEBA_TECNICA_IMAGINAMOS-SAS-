export type AddPropsProduct = {
  name: string;
  qualification: number;

  price: number;
  image: string;
  amount: number;
};

export type AddPropsProducts = {
  products: AddPropsProduct[];
};
