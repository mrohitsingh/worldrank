import styles from "./MyCountries.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const MyCountries = ({ countries }) => {
  const [search, setSearch] = useState("");
  const [myCountry, setMyCountry] = useState(countries);
  const [populationFlag, setPopulationFlag] = useState(0);
  const [areaFlag, setAreaFlag] = useState(0);
  const [nameFlag, setNameFlag] = useState(0);

  const router = useRouter();

  const orderByPopulation = (countries) => {
    setNameFlag(0);
    setAreaFlag(0);
    if (populationFlag == 0) {
      let pop = [...countries].sort((a, b) =>
        a.population < b.population ? 1 : -1
      );
      setPopulationFlag(1);
      setMyCountry(pop);
    }
    if (populationFlag == 1) {
      let pop = [...countries].sort((a, b) =>
        a.population > b.population ? 1 : -1
      );
      setPopulationFlag(0);
      setMyCountry(pop);
    }
  };

  const orderByName = (countries) => {
    setPopulationFlag(0);
    setAreaFlag(0);
    if (nameFlag == 0) {
      let nam = [...countries].sort((a, b) =>
        a.name.common < b.name.common ? 1 : -1
      );
      setNameFlag(1);
      setMyCountry(nam);
    }
    if (nameFlag == 1) {
      let nam = [...countries].sort((a, b) =>
        a.name.common > b.name.common ? 1 : -1
      );
      setNameFlag(0);
      setMyCountry(nam);
    }
  };

  const orderByArea = (countries) => {
    setNameFlag(0);
    setPopulationFlag(0);
    if (areaFlag == 0) {
      let are = [...countries].sort((a, b) => (a.area < b.area ? 1 : -1));
      setAreaFlag(1);
      setMyCountry(are);
    }
    if (areaFlag == 1) {
      let are = [...countries].sort((a, b) => (a.area > b.area ? 1 : -1));
      setAreaFlag(0);
      setMyCountry(are);
    }
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value.toLowerCase());
    setMyCountry(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(search)
      )
    );
  };

  return (
    <div className={styles.countriestable_outer}>
      <div className={styles.searchcontainer}>
        <div className={styles.search}>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          <input
            className={styles.input}
            type="text"
            placeholder="Search"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <div className={styles.countriestable_inner}>
        <div className={styles.head}>
          <button>Id</button>
          <button onClick={() => orderByName(countries)}>
            Name
            {nameFlag == 0 ? (
              <i className={`${styles.arrow} ${styles.down}`}></i>
            ) : (
              <i className={`${styles.arrow} ${styles.up}`}></i>
            )}
          </button>
          <button>Flags</button>
          <button onClick={() => orderByArea(countries)}>
            Area
            {areaFlag == 0 ? (
              <i className={`${styles.arrow} ${styles.down}`}></i>
            ) : (
              <i className={`${styles.arrow} ${styles.up}`}></i>
            )}
          </button>
          <button onClick={() => orderByPopulation(countries)}>
            Population
            {populationFlag == 0 ? (
              <i className={`${styles.arrow} ${styles.down}`}></i>
            ) : (
              <i className={`${styles.arrow} ${styles.up}`}></i>
            )}
          </button>
        </div>
        <div>
          {myCountry == 0 ? (
            <div className={styles.no_result}>No result found</div>
          ) : (
            <div className={styles.content}>
              {myCountry.map((country, index) => {
                return (
                  <div
                    key={index}
                    className={styles.country_row}
                    onClick={() =>
                      router.push({
                        pathname: `/countrypage/${country.ccn3}`,
                      })
                    }
                  >
                    <div className={styles.country_name}>
                      <p>{index + 1}</p>
                    </div>
                    <div className={styles.country_name}>
                      <p>{country.name.common}</p>
                    </div>
                    <div className={styles.country_flag}>
                      <img src={country.flags.svg} alt={country.name.common} />
                    </div>
                    <div className={styles.country_area}>
                      <p>{country.area}</p>
                    </div>
                    <div className={styles.country_population}>
                      <p>{country.population}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCountries;
