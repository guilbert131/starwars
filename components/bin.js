import Head from 'next/head'

export const getStaticProps = async () => {
    const res = await fetch('https://swapi.dev/api/films');
    const data = await res.json();

    return {
        props: {films:data}
        
    }
}



const Films = ({films}) => {
    return (
      
       <div>
        <h1>Filmes</h1>
        {films.map((film) =>(
            <div key ={film.title}>
            <a>
                <h3>{film.title}</h3>
            </a>

            </div>
        ))}
</div>
  

        );
    }
  


export default Films;


----------------------------

import fetch from 'isomorphic-unfetch';

export const getStaticPaths = async () => {
    const res = await fetch('https://swapi.dev/api/films');
    const data = await res.json();
  

  
    const paths = data.results.map(film => {
      return {
        params: { id: film.episode_id.toString() },
      };
    });
    return {
      paths,
      fallback: false,
    };
  };

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`https://swapi.dev/api/films` + id);
  const data = await res.json();

  return {
    props: { film: data },
  };
};

const Details = ({ film }) => {
    return (
      <div>
        <h1>Episode {film.episode_id}</h1>
        <h1>{film.title}</h1>
      </div>
    );
  };
  
  export default Details;







