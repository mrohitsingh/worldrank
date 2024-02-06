import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import MyCountries from "../components/MyCountries";

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>World Rank By Rohit Singh </title>
        <meta name="description" content="Created by Rohit Singh" />
        <link rel="icon" href="/earth.svg" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
      ></Script>
      <div className={styles.container}>
        <MyCountries countries={data} />
      </div>
    </div>
  );
}
