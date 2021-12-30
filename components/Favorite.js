
import styles from '../styles/Home.module.css'
const Favorite = ({ movie, setFave }) => {
    return (
        <p className={movie.isFav ? styles.iconFav : styles.icon} onClick={() => setFave(movie.episode_id)} >Like</p>
    );
}

export default Favorite;