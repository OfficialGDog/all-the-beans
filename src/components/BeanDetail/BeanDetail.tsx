import type { BeanDetailProps } from "../../types/coffeeBean";
import AddToOrderButton from "../AddToOrderButton/AddToOrderButton";

export default function BeanDetail({ bean, onAddToOrder }: BeanDetailProps) {
  return (
    <div>
      <h1>{bean.Name}</h1>
      <p>{bean.Country}</p>
      <p>{bean.Description}</p>
      <AddToOrderButton bean={bean} onAddToOrder={onAddToOrder}/>
    </div>
  );
}