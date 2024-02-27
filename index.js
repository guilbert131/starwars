import Head from "next/head";
import Image from "next/image";
import starwars from "../static/starwars.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Wars | detalhes</title>
      </Head>

      <div className="container">
        <div className="img">
          <Image src={starwars} width="500" height="auto" />
        </div>

        <style jsx>{`
          .img {
            text-align: center;
            display: block;

            top: 50%;
            transform: translateY(50%);
          }
          p {
            color: var(--heading);
            text-align: center;
            margin-top: 5px;
            font-size: 15pt;

            margin-bottom: 150px;
          }
          h1 {
            color: var(--secondary);
            font-size: 80pt;
            text-align: center;
            margin-top: 150px;
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    </>
  );
}
