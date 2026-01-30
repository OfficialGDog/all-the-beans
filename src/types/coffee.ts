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