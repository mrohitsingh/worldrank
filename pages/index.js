import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyCountries from '../components/MyCountries'

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}



export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>World Rank </title>
        <link rel="icon" href="/earth.svg" />
      </Head>
      <div className={styles.container}>
        <h3 className={styles.header}>World Rank</h3>
        <MyCountries countries={data} />
      </div>

    </div>
  )
}
