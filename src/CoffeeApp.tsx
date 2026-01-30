import { useEffect, useState } from 'react';
import { Grid, Column, Search } from '@carbon/react';
import BeanList from './components/BeanList/BeanList';
import type { CoffeeBeanApi } from './types/coffee';
import { BEANS } from './data/beans';
import './CoffeeApp.css';


function CoffeeApp() {
  const [query, setQuery] = useState('');
  const [selectedBean, setSelectedBean] = useState<CoffeeBeanApi | undefined>();

  useEffect(() => {
    console.log("selected", selectedBean?.Name);
  }, [selectedBean]);
  return (
    <Grid fullWidth>
      <Column sm={4} md={8} lg={16}>
        <h1>Available Coffee Beans</h1>
        <BeanList beans={BEANS} onSelect={setSelectedBean}/>
      </Column>
    </Grid>
  );
}

export default CoffeeApp;
