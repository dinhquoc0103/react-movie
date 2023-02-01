import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./MovieGrid.module.scss";

import config from "../../config";
import getMovieList from '../../services/getMovieList';
import getTvList from '../../services/getTvList';

import MovieCard from "../MovieCard";


const cx = classNames.bind(styles);

function MovieGrid({ category }) {
    const [movies, setMovies] = useState([]);
    const categories = config.theMovieApi.categories;
    const movieType = config.theMovieApi.movieType;
    const tvType = config.theMovieApi.tvType;

    useEffect(() => {
        const fetchApi = async () => {
            let response = null;
            switch (category) {
                case categories.movie:
                    response = await getMovieList(movieType.upcoming);
                    break;

                default:
                    response = await getTvList(tvType.popular);
                    break;
            }
            setMovies(response.results);
        }
        fetchApi();
    }, [category]);

    return (
        <div className={cx("movie-grid")}>
            {movies.map((movie, index) => (
                <MovieCard movie={movie} category={category} />
            ))}
        </div>
    );
}

MovieGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default MovieGrid;