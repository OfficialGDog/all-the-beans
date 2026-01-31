import { Button } from "@carbon/react";
import type { CoffeeBeanApi } from "../../types/coffeeBean";
import styles from "./AddToOrderButton.module.scss";

type AddToOrderButtonProps = {
  bean: CoffeeBeanApi;
  className?: string;
  onAddToOrder: (bean: CoffeeBeanApi) => void;
};

export default function AddToOrderButton({bean, onAddToOrder, ...rest}: AddToOrderButtonProps) {
  return (
    <Button
      className={styles[rest.className || '']}
      size="md"
      kind="secondary"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onAddToOrder(bean);
      }}
    >
      {bean.Cost}
    </Button>
  );
}
