// 1. Import

import Head from "next/head";
import Apple from "../PropsComponents/Apple";

//2. Fuction definition
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Apple name="Anil" msg="Oklabs" />

    </>
  );
}

//3. Export definition

// export default Home;
