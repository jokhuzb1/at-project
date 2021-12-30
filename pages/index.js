import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Favorite from '../components/Favorite'

export const getStaticProps = async () => {
  const res = await fetch(`https://swapi.dev/api/films/`)
  const data = await res.json();
  data.results.map(data => {
    data.isFav = false;
  })
  return {
    props: { movies: data.results },
  }
}
export default function Home({ movies }) {
  // const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [favs, setFavs] = useState([]);

  const setFave = (id) => {
    movies.map(movie => {
      if (movie.episode_id == id) {
        movie.isFav = !movie.isFav
      }
    })
  }
  return (

    <div className={styles.mainContainer}>

      <input type='search' className={styles.search} placeholder="search..." onChange={e => { setSearchTerm(e.target.value) }} />
      {movies && movies.filter(movie => {
        if (searchTerm == '') {
          return movie
        } else if (movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return movie
        }
      }).map(movie => (
        <div className={styles.listComponent} key={movie.episode_id}>
          <Link href={`/${movie.episode_id}`} >
            <a className={styles.singleMovie}>
              <h3>{movie.title}</h3>
            </a>
          </Link>

        </div>
      ))}


    </div>
  )
}
