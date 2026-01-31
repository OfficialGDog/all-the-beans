export type BeanListProps = {
  beans: CoffeeBeanApi[];
  onAddToOrder: (bean: CoffeeBeanApi) => void;
};

export type BeanDetailProps = {
  bean: CoffeeBeanApi;
  onAddToOrder: (bean: CoffeeBeanApi) => void;
};

export interface CoffeeBeanApi {
  _id: string;
  index: number,
  isBOTD: boolean,
  Cost: string,
  Image: string,
  colour: string,
  Name: string,
  Description: string,
  Country: string
}

export interface CoffeeBean {
  id: string;
  name: string;
  country: string;
  roast: string,
  description: string;
  price: number;
  imageUrl: string;
  isBeanOfTheDay: boolean;
}