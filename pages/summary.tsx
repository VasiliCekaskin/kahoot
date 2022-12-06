import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

// @ts-ignore
import cookieCutter from "cookie-cutter";

export default function LevelTwo() {
  const [teamName, setTeamName] = useState("");
  const [totalPoints, setTotalPoints] = useState("");

  useEffect(() => {
    setTotalPoints(cookieCutter.get("points"));
    setTeamName(cookieCutter.get("playerName"));
  }, []);

  return (
    <div className="h-screen">
      <Head>
        <title>Kahoot clone | Summary</title>
        <meta name="description" content="Kahoot clone" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="grid justify-items-center">
        <div className="m-auto text-center">
          <Image src={"/Logo.jpeg"} alt={"Logo"} width={200} height={200} />

          <p className="mb-2 font-bold">Team</p>
          <p className="mb-6">{teamName}</p>
        </div>

        <main className="grid w-4/5 justify-items-center">
          <p className="mb-6 font-bold">Erreichte Punkte</p>
          <div
            className="p-8 mb-4 text-white"
            style={{ backgroundColor: "#004b3e" }}
          >
            <p>{totalPoints}</p>
          </div>

          <Image
            src={"/Summary.gif"}
            alt={"Summary"}
            width={300}
            height={300}
          />
        </main>
      </div>
    </div>
  );
}
