import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./MovieGrid.module.scss";

import config from "../../config";
import services from "../../services";

import MovieCard from "../MovieCard";
import Button from "../Button";


const cx = classNames.bind(styles);

function MovieGrid({ category, searchValue }) {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const categories = config.theMovieApi.categories;
    const movieType = config.theMovieApi.movieType;
    const tvType = config.theMovieApi.tvType;
    const timeWindow = config.theMovieApi.timeWindow;

    useEffect(() => {
        const fetchApi = async () => {
            let response = null;
            if (!searchValue) {
                switch (category) {
                    case categories.movie:
                        response = await services.getMovieList(movieType.upcoming);
                        break;
                    case categories.tv:
                        response = await services.getTvList(tvType.popular);
                        break;

                    default:
                        response = await services.getTrendingList(categories.all, timeWindow.day);
                        break;
                }
            }
            else {
                const params = {
                    query: searchValue
                }
                response = await services.getSearchList(searchValue, params);
            }
            setMovies(response.results);
            setPage(response.page);
            setTotalPages(response.total_pages)
        }
        fetchApi();
    }, [category, searchValue]);

    const handleLoadMore = async () => {
        let response = null;
        const params = {
            page: page + 1
        }
        if (searchValue) {
            params.query = searchValue;
        }

        if (!searchValue) {
            switch (category) {
                case categories.movie:
                    response = await services.getMovieList(movieType.upcoming, params);
                    break;

                case categories.tv:
                    response = await services.getTvList(tvType.popular, params);
                    break;

                default:
                    response = await services.getTrendingList(categories.all, timeWindow.day, params);
                    break;
            }
        }
        else {
            response = await services.getSearchList(searchValue, params);
        }
        setMovies([...movies, ...response.results]);
        setPage(response.page);
    }

    return (
        <>
            {
                movies.length === 0 && searchValue
                    ? (<div className={cx("no-results")}>
                        <span>No results found for keyword</span>
                    </div>)
                    : <div className={cx("movie-grid")}>
                        {

                            movies.map((movie, index) => (
                                <MovieCard movie={movie} category={category} />
                            ))
                        }
                    </div>
            }

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
    category: PropTypes.string,
    searchValue: PropTypes.string
}

export default MovieGrid;