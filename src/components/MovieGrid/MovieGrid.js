import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./MovieGrid.module.scss";

import config from "../../config";
import getMovieList from '../../services/getMovieList';
import getTvList from '../../services/getTvList';

import MovieCard from "../MovieCard";
import Button from "../Button";


const cx = classNames.bind(styles);

function MovieGrid({ category }) {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
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
            setPage(response.page);
            setTotalPages(response.total_pages)
        }
        fetchApi();
    }, [category]);

    const handleLoadMore = async () => {
        let response = null;
        const params = {
            page: page + 1
        }
        switch (category) {
            case categories.movie:
                response = await getMovieList(movieType.upcoming, params);
                break;

            default:
                response = await getTvList(tvType.popular, params);
                break;
        }
        setMovies([...movies, ...response.results]);
        setPage(response.page);
    }

    return (
        <>
            <div className={cx("movie-grid")}>
                {movies.map((movie, index) => (
                    <MovieCard movie={movie} category={category} />
                ))}
            </div>
            {
                page < totalPages ? (
                    <div className={cx("load-more")}>
                        <Button
                            className={["btn", "btn--outline"]}
                            onClick={handleLoadMore}
                        >
                            Load More!
                        </Button>
                    </div>
                ) : null
            }
        </>
    );
}

MovieGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default MovieGrid;