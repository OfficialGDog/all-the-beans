import type { BeanDetailProps } from "../../types/coffeeBean";
import AddToOrderButton from "../AddToOrderButton/AddToOrderButton";
import styles from "./BeanDetail.module.scss";

export default function BeanDetail({ bean, onAddToOrder }: BeanDetailProps) {
  function roastClass(colour?: string) {
    switch (colour?.toLowerCase()) {
      case "green":
        return styles.green;
      case "light roast":
        return styles.light;
      case "medium roast":
        return styles.medium;
      case "dark roast":
        return styles.dark;
      default:
        return "";
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={`${bean.Image}?w=400&h=300&fit=crop`}
          alt={`${bean.Name} from ${bean.Country}`}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>{bean.Name}</h1>
        <div className={styles.details}>
          <span className={styles.country}>{bean.Country}</span>
          <span className={`${styles.roast} ${roastClass(bean.colour)}`}>
            Roast: {bean.colour}
          </span>
        </div>
        <p className={styles.description}>{bean.Description}</p>
        <div className={styles.buttonWrapper}>
          <AddToOrderButton bean={bean} onAddToOrder={onAddToOrder} />
        </div>
      </div>
    </div>
  );
}