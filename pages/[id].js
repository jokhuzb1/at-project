import Char from "../components/char";
import styles from '../styles/component.module.css'
import { useState } from 'react'

export const getStaticPaths = async () => {
    const res = await fetch(`https://swapi.dev/api/films/`);
    const data = await res.json()

    const paths = data.results.map(data => {
        return {
            params: { id: data.episode_id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://swapi.dev/api/films/${id}`);
    const data = await res.json()

    return {
        props: { movie: data }
    }
}

const SingleMovie = ({ movie }) => {
    const { show, setShow } = useState(false)
    const { title, opening_crawl, producer, director, planets, release_date } = movie;
    return (
        <div className={styles.main}>
            <h1>{title}</h1>
            <p>{opening_crawl}</p>
            <div className={styles.title}>
                <a><b>Director:</b> {director} </a>
                <a><b>Producer:</b> {producer} </a>
                <a><b>Released: </b> {release_date}</a>
            </div>
            <h1>Characters</h1>
            <div className={styles.allCharacters}>
                {movie.characters.map(character => (
                    <div className={styles.singleChar} key={character}>
                        <Char key={character} character={character} />
                    </div>
                ))}
            </div>


        </div>
    );
}

export default SingleMovie;