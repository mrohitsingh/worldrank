/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router';
import styles from '../../styles/countrypage.module.css';


export const getServerSideProps = async ({params}) => {
     const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.country}`);
    const data = await res.json();
    return {
        props: {
             data
        }
    }
}

const country = (data) => {
//    console.log(data.data[0]);
    const router = useRouter();

const e = data.data[0];
  return (
    <div>
        <Head>
            <title>{e.name.common} </title>
            <link rel="icon" href={e.flags.svg} />
        </Head>
        <div className={styles.countrypage_outer}>
            <div className={styles.countrypage_inner}>
                <div className={styles.left}>
                    <img src={e.flags.svg} alt="flag" />
                </div>
                <div className={styles.right}>
                    <h3>{e.name.common}/{e.region}</h3>
                    <div className={styles.details}>
                        <p>Capital: </p>
                        <h4>{e.capital}</h4>
                    </div>
                    <div className={styles.details}>
                        <p>Population: </p>
                        <h4>{e.population}</h4>
                    </div>
                    <div className={styles.details}>
                        <p>Area: </p>
                        <h4>{e.area} &#x33A2;</h4>
                    </div>
                    <div className={styles.details}>
                        <p>Subregion: </p>
                        <h4>{e.subregion}</h4>
                    </div>
                    <div className={styles.details}>
                        <p>Timezones: </p>
                        <h4>{e.timezones}</h4>
                    </div>
                    <button onClick={() => router.push({
                                pathname: '/',
                                
                            })}>Back To Home</button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default country
