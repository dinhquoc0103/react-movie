import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from "prop-types";
import classNames from 'classnames/bind';
import styles from "./MovieSlide.module.scss";

import config from '../../config';
import services from '../../services';

import MovieCard from '../MovieCard';

const cx = classNames.bind(styles);

function MovieSlide({ category, type, movieId = null }) {
    const [movies, setMovies] = useState([]);
    const categories = config.theMovieApi.categories;

    useEffect(() => {
        const fetchApi = async () => {
            let response = null;
            if (type !== "similar") {
                switch (category) {
                    case categories.movie:
                        response = await services.getMovieList(type);
                        break;

                    default:
                        response = await services.getTvList(type);
                        break;
                }
            }
            else {
                response = await services.getSimilarList(category, movieId);
            }
            setMovies(response.results);
        }
        fetchApi();
    }, []);

    return (
        <div className={cx("movie-list")}>
            <Swiper
                grabCursor={true}
                spaceBetween={12}
                slidesPerView={'auto'}
            >
                {movies.map((movie, index) => (
                    <SwiperSlide key={index} className={cx("swiper-slide")}>
                        {/* <img src={config.theMovieApi.w500Img(movie.poster_path)} alt="" /> */}
                        <MovieCard movie={movie} category={category} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

MovieSlide.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    movieId: PropTypes.number,
}

export default MovieSlide;