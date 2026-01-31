import { useState } from 'react';
import { Grid, Column, Search } from '@carbon/react';
import BeanList from '../../components/BeanList/BeanList';
import { BEANS } from '../../data/beans';
import type { CoffeeBeanApi } from '../../types/coffeeBean';

type HomePageProps = {
  onAddToOrder: (bean: CoffeeBeanApi) => void;
};

function HomePage({ onAddToOrder }: HomePageProps) {
  const [query, setQuery] = useState('');

  return (
    <Grid fullWidth>
      <Column sm={4} md={8} lg={16}>
        <h1>Available Coffee Beans</h1>
        <BeanList beans={BEANS} onAddToOrder={onAddToOrder}/>
      </Column>
    </Grid>
  );
}

export default HomePage;
