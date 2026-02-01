import { useMemo, useState } from "react";
import { Grid, Column, Search, Dropdown } from "@carbon/react";
import BeanList from "../../components/BeanList/BeanList";
import { BEANS } from "../../data/beans";
import type { CoffeeBeanApi } from "../../types/coffeeBean";
import styles from "./HomePage.module.scss";

type HomePageProps = {
  onAddToOrder: (bean: CoffeeBeanApi) => void;
};

const ALL_COUNTRIES = "All countries";
const ALL_ROASTS = "All roasts";

function HomePage({ onAddToOrder }: HomePageProps) {
  const [query, setQuery] = useState<string>("");
  const [country, setCountry] = useState<string | null>(null);
  const [roast, setRoast] = useState<string | null>(null);

  const countries = useMemo(
    () => [ALL_COUNTRIES, ...Array.from(new Set(BEANS.map((b) => b.Country)))],
    [],
  );

  const roasts = useMemo(
    () => [ALL_ROASTS, ...Array.from(new Set(BEANS.map((b) => b.colour)))],
    [],
  );

const filteredBeans = useMemo(() => {
  const lowerCaseQuery = query.toLowerCase();
  return BEANS.filter((bean) => {
    if (query) {
      const nameMatches = bean.Name.toLowerCase().includes(lowerCaseQuery);
      const descriptionMatches = bean.Description.toLowerCase().includes(lowerCaseQuery);
      if (!nameMatches && !descriptionMatches) return false;
    }

    if (country && bean.Country !== country) return false;
    if (roast && bean.colour !== roast) return false;

    return true;
  });
}, [query, country, roast]);

  return (
    <Grid fullWidth className={styles.grid}>
      <Column sm={4} md={8} lg={16}>
        <h1>Available Coffee Beans</h1>
        <div className={styles.filtersWrapper}>
          <div className={styles.searchWrapper}>
            <Search
              labelText="Search coffee beans"
              placeholder="Search by name or description"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              size="lg"
            />
          </div>
          <div className={styles.dropDownWrapper}>
            <Dropdown
              id="country-filter"
              className={styles.dropdown}
              label={"Country"}
              titleText="Country"
              hideLabel={true}
              items={countries}
              size="lg"
              selectedItem={country ?? ALL_COUNTRIES}
              onChange={({ selectedItem }) =>
                setCountry(selectedItem === ALL_COUNTRIES ? null : selectedItem)
              }
            />
            <Dropdown
              id="roast-filter"
              className={styles.dropdown}
              label={"Roast"}
              titleText="Roast"
              hideLabel={true}
              items={roasts}
              size="lg"
              selectedItem={roast ?? ALL_ROASTS}
              onChange={({ selectedItem }) =>
                setRoast(selectedItem === ALL_ROASTS ? null : selectedItem)
              }
            />
          </div>
        </div>
        {filteredBeans.length === 0 ? (
          <p>No coffee beans found. Try adjusting your search or filters.</p>
        ) : (
          <BeanList beans={filteredBeans} onAddToOrder={onAddToOrder} />
        )}
      </Column>
    </Grid>
  );
}

export default HomePage;
