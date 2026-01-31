import { Link } from "react-router-dom";
import { Grid, Column, Tile } from "@carbon/react";
import type { CoffeeProps } from "../../types/coffee";
import styles from "./BeanList.module.scss";

export default function BeanList({ beans }: CoffeeProps) {
    return (
    <Grid condensed>
      {beans.map((bean) => (
        <Column key={bean._id} sm={4} md={4} lg={4}>
          <Link className={styles.tileWrapper} to={`/beans/${bean._id}`} aria-label={`View details for ${bean.Name} from ${bean.Country}`}>
            <Tile>
              <div className={styles.imageWrapper}>
                <img
                  loading="lazy"
                  src={`${bean.Image}?w=400&h=300&fit=crop`}
                  alt={`${bean.Name} from ${bean.Country}`}
                />
              </div>
              <h4>{bean.Name}</h4>
              <p>{bean.Country}</p>
            </Tile>
          </Link>
        </Column>
      ))}
    </Grid>
  );
}
