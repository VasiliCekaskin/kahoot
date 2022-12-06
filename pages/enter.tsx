import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
const abuget = localFont({ src: "./Abuget.ttf" });

// @ts-ignore
import cookieCutter from "cookie-cutter";
import Router from "next/router";

export default function Enter() {
  const playerNameRef = useRef<HTMLInputElement>(null);

  const enterGame = () => {
    const playerName = playerNameRef?.current?.value;

    cookieCutter.set("playerName", playerName);
    cookieCutter.set("points", 0);

    Router.push("/levelOne");
  };

  return (
    <div className="h-screen">
      <Head>
        <title>Kahoot clone | Enter</title>
        <meta name="description" content="Kahoot clone" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="inline-block align-middle">
        <div className="flex">
          <Image
            className="m-auto"
            src={"/Logo.jpeg"}
            alt={"Logo"}
            width={200}
            height={200}
          />
        </div>

        <main className="inline-block align-middle text-center mt-20">
          <div className="text-center">
            <label className="w-screen m-6">Euer Teamname</label>
            <br />
            <input
              className="rounded-full w-screen m-6 h-12 border-4"
              ref={playerNameRef}
              type="text"
            />
          </div>

          <p className={abuget.className} style={{ fontSize: 50 }}>
            Viel Erfolg!
          </p>
        </main>

        <footer className="flex items-center mt-20">
          <button onClick={enterGame} className="m-auto text-xl">
            {"weiter >"}
          </button>
        </footer>
      </div>
    </div>
  );
}
