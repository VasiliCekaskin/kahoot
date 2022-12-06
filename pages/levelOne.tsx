import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
const abuget = localFont({ src: "../public/abuget.ttf" });

// @ts-ignore
import cookieCutter from "cookie-cutter";
import Router from "next/router";

export default function LevelOne() {
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [showAnswer, setShowAnswer] = useState("");

  const finishLevel = () => {
    if (selectedAnswer === 2) {
      const currentPoints = cookieCutter.get("points");
      cookieCutter.set("points", parseInt(currentPoints) + 1);

      setShowAnswer("correct");
    } else {
      setShowAnswer("incorrect");
    }

    setTimeout(() => {
      Router.push("/levelTwo");
    }, 5000);
  };

  return (
    <div className="h-screen">
      <Head>
        <title>Kahoot clone | Level One</title>
        <meta name="description" content="Kahoot clone" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="grid justify-items-center">
        <div className="m-auto">
          <Image src={"/Logo.jpeg"} alt={"Logo"} width={200} height={200} />
        </div>

        <main className="grid w-4/5 justify-items-center">
          <p className="justify-self-end mb-6">Frage 1 von 11</p>
          <Image src={"/LevelOne.jpeg"} alt={"Logo"} width={200} height={200} />

          <div className="block text-center mt-12">
            <button
              id="answer1"
              className="m-4 p-4 text-white"
              style={{ backgroundColor: "#004b3e" }}
              onClick={() => {
                document.getElementById("answer1").style.backgroundColor =
                  "#004b3e";
                document.getElementById("answer2").style.backgroundColor =
                  "#f4f4f4";
                document.getElementById("answer3").style.backgroundColor =
                  "#f4f4f4";
                document.getElementById("answer4").style.backgroundColor =
                  "#f4f4f4";

                setSelectedAnswer(1);
              }}
            >
              #5b822c
            </button>

            <button
              id="answer2"
              className="m-4 p-4 text-white"
              style={{ backgroundColor: "#004b3e" }}
              onClick={() => {
                document.getElementById("answer1").style.backgroundColor =
                  "#f4f4f4";
                document.getElementById("answer2").style.backgroundColor =
                  "#004b3e";
                document.getElementById("answer3").style.backgroundColor =
                  "#f4f4f4";
                document.getElementById("answer4").style.backgroundColor =
                  "#f4f4f4";
                setSelectedAnswer(2);
              }}
            >
              #004b3e
            </button>

            <button
              id="answer3"
              className="m-4 p-4 text-white"
              style={{ backgroundColor: "#004b3e" }}
              onClick={() => {
                document.getElementById("answer1").style.backgroundColor =
                  "#f4f4f4";
                document.getElementById("answer2").style.backgroundColor =
                  "#f4f4f4";
                document.getElementById("answer3").style.backgroundColor =
                  "#004b3e";
                document.getElementById("answer4").style.backgroundColor =
                  "#f4f4f4";
                setSelectedAnswer(3);
              }}
            >
              #2e4416
            </button>

            <button
              id="answer4"
              className="m-4 p-4 text-white"
              style={{ backgroundColor: "#004b3e" }}
              onClick={() => {
                document.getElementById("answer1").style.backgroundColor =
                  "#f4f4f4";
                document.getElementById("answer2").style.backgroundColor =
                  "#f4f4f4";
                document.getElementById("answer3").style.backgroundColor =
                  "#f4f4f4";
                document.getElementById("answer4").style.backgroundColor =
                  "#004b3e";

                setSelectedAnswer(4);
              }}
            >
              #732b90
            </button>
          </div>

          {showAnswer === "correct" && (
            <div className="block text-center mt-12 text-green">
              <p className={abuget.className} style={{ fontSize: 50 }}>
                Richtig :)
              </p>
            </div>
          )}

          {showAnswer === "incorrect" && (
            <div className="block text-center mt-12 text-green">
              <p className={abuget.className} style={{ fontSize: 50 }}>
                Falsch :(
              </p>
            </div>
          )}

          {showAnswer !== "" && (
            <Image
              className="animate-spin m-auto mt-6"
              src={"/Loading.png"}
              alt={"Logo"}
              width={25}
              height={25}
            />
          )}

          <footer className="flex items-center mt-24">
            <button onClick={finishLevel} className="m-auto text-xl">
              {"weiter >"}
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
}
