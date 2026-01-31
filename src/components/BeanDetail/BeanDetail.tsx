import type { CoffeeBeanApi } from "../../types/coffee";

export default function BeanDetail({ bean }: { bean: CoffeeBeanApi }) {
  return (
    <div>
      <h1>{bean.Name}</h1>
      <p>{bean.Country}</p>
      <p>{bean.Description}</p>
    </div>
  );
}