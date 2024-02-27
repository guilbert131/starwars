import styles from "../../styles/episodes.module.css";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://swapi.dev/api/films");
  const data = await res.json();

  return {
    props: { films: data.results },
  };
};

const Films = ({ films }) => {
  const sortedData = films.sort((a, b) => a.episode_id - b.episode_id);
  return (
    <div>
      {sortedData.map((film) => (
        <div className="card" key={film.episode_id}>
          <Link
            className={styles.a}
            href={"/details/" + film.url.slice(-2, -1)}
          >
            <p>
              {`Episode: ${film.episode_id}`} - <strong>{film.title}</strong>
            </p>
          </Link>
        </div>
      ))}

      <style jsx>{`
        h4 {
          color: white;
        }
        h1 {
          color: white;
        }

        p {
          color: black;
          padding-left: 10px;
        }

        .card {
          padding: 1px 0px 1px 0px;
          border-radius: 0px 50px 50px 0px;
          width: 40%;
          margin: 20px 10px 0px 100px;
          background: white;
          display: block;
          border-left: 8px solid white;
        }

        .card:hover {
          border-left: 8px solid rgb(191, 38, 38);
        }

        .cardTop {
        }
      `}</style>
    </div>
  );
};

export default Films;
