import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/NavbarAfterLogin";
import { Fragment } from "react";
import Baner from "../components/header/Baner";
import Footer from "../components/footer/Footer";
import Peler from "./api/index";

// export async function getStaticProps() {
//   const result = await axios.get(`${process.env.API_BACKEND}review`);
//   console.log(result.data);
//   return { props: { detail: JSON.parse(JSON.stringify(result.data.data)) } };
// }

// export async function getStaticProps() {
//   const detail = await Peler()
//   // console.log(detail);
//   return { props: { detail } };
// }

export default function Home({ detail }) {
  console.log(detail);
  return (
    <Fragment>
      <div className="body">
        <div className={styles.container}>
          <Head>
            <title>Hire Jobs</title>
            <meta name="description" content="Generated by Hire Jobs" />
            <link rel="icon" href="/vercel.svg" />
          </Head>
          <Navbar />
          <Baner data={detail} />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}