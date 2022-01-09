import styles from "../App.module.css";
import Movie from "../components/Movie";
import {useEffect, useState} from "react";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className={styles.title}>
            {loading ? <h1>is loading...</h1> : movies.map(movie => (
                <Movie key={movie.id}
                       coverImage={movie.medium_cover_image}
                       title={movie.title}
                       summary={movie.summary}
                       genres={movie.genres}
                />
            ))}
        </div>
    );
}

export default Home;