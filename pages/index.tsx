import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Simple from "./JK_Pages/header";
import HeroBanner from "./JK_Pages/hero";

const Home: NextPage = () => {
  return (
    <>
      <Simple></Simple>
      <HeroBanner></HeroBanner>
    </>
  );
};

export default Home;
