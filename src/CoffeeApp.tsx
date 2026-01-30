import { useState } from 'react';
import { Grid, Column } from '@carbon/react';
import BeanList from './components/BeanList/BeanList';
import './App.css';

function CoffeeApp() {
  const [query, setQuery] = useState('');

  return (
    <Grid fullWidth>
      <Column sm={4} md={8} lg={16}>
        <h3>Available Coffee Beans</h3>
        <BeanList />
      </Column>
    </Grid>
  );
}

export default CoffeeApp;
