import type { CoffeeBeanApi } from "./coffeeBean";

export type OrderItem = CoffeeBeanApi & {
  quantity: number;
};