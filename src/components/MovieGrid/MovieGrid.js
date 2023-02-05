import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./MovieGrid.module.scss";

import config from "../../config";
import getMovieList from '../../services/getMovieList';
import getTvList from '../../services/getTvList';
import getSearchList from '../../services/getSearchList';
import getTrendingList from '../../services/getTrendingList';

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
                        response = await getMovieList(movieType.upcoming);
                        break;
                    case categories.tv:
                        response = await getMovieList(movieType.upcoming);
                        break;

                    default:
                        response = await getTrendingList(categories.all, timeWindow.day);
                        break;
                }
            }
            else {
                const params = {
                    query: searchValue
                }
                response = await getSearchList(searchValue, params);
            }
            setMovies(response.results);
            setPage(response.page);
            setTotalPages(response.total_pages)
        }
        fetchApi();
    }, [category, searchValue]);

    const handleLoadMore = async () => {
        console.log(searchValue)
        let response = null;
        const params = {
            query: searchValue,
            page: page + 1
        }
        if (!searchValue) {
            switch (category) {
                case categories.movie:
                    response = await getMovieList(movieType.upcoming);
                    break;

                default:
                    response = await getTvList(tvType.popular);
                    break;
            }
        }
        else {
            response = await getSearchList(searchValue, params);
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