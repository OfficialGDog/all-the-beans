import { Grid, Column, Tile } from "@carbon/react";
import { BEANS } from "../../data/beans"

export default function BeanList() {
    return (
    <Grid condensed>
      {BEANS.map(({_id, Name, Country}) => (
        <Column key={_id} sm={4} md={4} lg={4}>
          <Tile>
            <h4>{Name}</h4>
            <p>{Country}</p>
          </Tile>
        </Column>
      ))}
    </Grid>
  );
}
