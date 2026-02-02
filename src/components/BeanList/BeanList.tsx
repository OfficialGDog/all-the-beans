import { Link } from "react-router-dom";
import { Grid, Column, Tile } from "@carbon/react";
import type { BeanListProps } from "../../types/coffeeBean";
import AddToOrderButton from "../AddToOrderButton/AddToOrderButton";
import BeanOfTheDay from "../BeanOfTheDay/BeanOfTheDay";
import styles from "./BeanList.module.scss";

type CustomStyle = React.CSSProperties & {
  "--delay"?: string;
};

const getTileAnimationStyle = (index: number, step = 70): CustomStyle => ({
  "--delay": `${index * step}ms`,
});

export default function BeanList({ beans, onAddToOrder }: BeanListProps) {
  return (
    <Grid condensed>
      {beans.map((bean, index) => (
        <Column className={styles.column} key={bean._id} sm={4} md={4} lg={4}>
          <Link
            className={styles.container}
            to={`/beans/${bean._id}`}
            aria-label={`View details for ${bean.Name} from ${bean.Country}`}
          >
            <Tile
              className={styles.tileWrapper}
              style={getTileAnimationStyle(index)}
            >
              <div
                className={styles.imageWrapper}>
                <img
                  loading="lazy"
                  src={`${bean.Image}?w=400&h=300&fit=crop`}
                  alt={`${bean.Name} from ${bean.Country}`}
                  className={styles.beanImage}
                />
                {bean.isBOTD && <BeanOfTheDay className="botdPosition" />}
              </div>
              <h4>{bean.Name}</h4>
              <p>{bean.Country}</p>
              <div className={styles.buttonContainer}>
                <AddToOrderButton bean={bean} onAddToOrder={onAddToOrder} />
              </div>
            </Tile>
          </Link>
        </Column>
      ))}
    </Grid>
  );
}
