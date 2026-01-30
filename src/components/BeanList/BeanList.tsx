import { Grid, Column, Tile } from "@carbon/react";
import type { CoffeeProps } from "../../types/coffee";
import type { KeyboardEvent } from "react";
import styles from "./BeanList.module.scss";

export default function BeanList({ beans, onSelect }: CoffeeProps) {
    return (
    <Grid condensed>
      {beans.map((bean) => (
        <Column key={bean._id} sm={4} md={4} lg={4}>
          <Tile 
            aria-label={`View details for ${bean.Name} from ${bean.Country}`} 
            tabIndex={0} 
            onClick={() => onSelect(bean)} 
            onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
              if (e.key === 'Enter' || e.key === ' ') onSelect(bean);
            }}>
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
        </Column>
      ))}
    </Grid>
  );
}
