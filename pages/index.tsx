import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Router from "next/router";

// @ts-ignore
import cookieCutter from "cookie-cutter";

export default function Index() {
  setTimeout(() => {
    Router.push("/enter");
  }, 5000);

  useEffect(() => {
    cookieCutter.set("playerName", "");
    cookieCutter.set("points", 0);
  });

  return (
    <div className="flex h-screen">
      <Head>
        <title>Kahoot clone</title>
        <meta name="description" content="Kahoot clone" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="m-auto text-center">
        <div>
          <Image src={"/Logo.jpeg"} alt={"Logo"} width={1000} height={700} />
          <p>Präsentiert von</p>
          <p>Christian und Lisa</p>

          <br />
          <br />
          <Image
            className="animate-spin m-auto"
            src={"/Loading.png"}
            alt={"Logo"}
            width={25}
            height={25}
          />
        </div>
      </main>
    </div>
  );
}
