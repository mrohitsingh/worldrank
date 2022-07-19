import styles from './MyCountries.module.css'

const MyCountries = ({countries}) => {
    // console.log(countries)
  return (
    <div className={styles.countriestable}>
        <div className={styles.innertable}>
            <div className={styles.namecol}>
                <h1>Name</h1>
                {
                    countries.map((country, index) => {
                        return (
                            <p key={index} className={styles.namebold}>{country.name.common}</p>
                        )
                    }
                )}
            </div>
            <div className={styles.namecol}>
                <h1>Area</h1>
                {
                    countries.map((country, index) => {
                        return (
                            <p key={index}>{country.area}</p>
                        )
                    }
                )}
            </div>
            <div className={styles.namecol}>
                <h1>Population</h1>
                {
                    countries.map((country, index) => {
                        return (
                            <p key={index}>{country.population}</p>
                        )
                    }
                )}

            </div>
        </div>

    </div>
  )
}

export default MyCountries
