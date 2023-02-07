import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./MovieDetail.module.scss";
import config from "../../config";
import services from "../../services";

import Button from "../../components/Button";
import CastList from "./components/CastList";
import VideoList from "./components/VideoList";
import MovieSlide from "../../components/MovieSlide";

const cx = classNames.bind(styles);

function MovieDetail() {
    const [movie, setMovie] = useState(null);

    const { category, id } = useParams();

    useEffect(() => {
        const getDetail = async () => {
            const data = await services.getDetail(category, id);
            setMovie(data);
        }

        getDetail();
    }, [category, id]);

    return (
        <>
            {
                movie &&
                (
                    <>
                        <div
                            className={cx("banner")}
                            style={{
                                backgroundImage: `url(
                                ${config.theMovieApi.originalImg(movie.backdrop_path || movie.poster_path)}
                            )`
                            }}
                        >
                        </div>

                        <div className={cx("movie-content")}>
                            <div
                                className={cx("movie-content__poster")}
                            >
                                <img src={config.theMovieApi.originalImg(movie.poster_path || movie.backdrop_path)} alt="" />
                            </div>

                            <div className={cx("movie-content__info")}>
                                <div className={cx("title")}>
                                    <h1>
                                        {
                                            (movie.name || movie.original_name) ?? (movie.title || movie.original_title)
                                        }
                                    </h1>
                                </div>

                                <div className={cx("imdb")}>
                                    <i class='bx bxl-imdb'></i>
                                    &nbsp;
                                    {movie.vote_average.toFixed(1)}
                                </div>

                                <div className={cx("genres")}>
                                    {
                                        movie.genres.map(genre => (
                                            <Button disabled className={["btn", "btn--outline", "disabled"]} key={genre.id}>{genre.name}</Button>
                                        ))
                                    }
                                </div>

                                <div className="more-info">
                                    <div className={cx("production-countries")}>
                                        <h3>
                                            Countries: &nbsp; &nbsp;
                                        </h3>
                                        {
                                            movie.production_countries.map((country, index) => (
                                                <span key={index}>{country.name}</span>
                                            ))
                                        }
                                    </div>

                                    <div className={cx("first-air-date")}>
                                        <h3>Release Date: &nbsp; &nbsp;</h3>
                                        {movie.first_air_date || movie.release_date}
                                    </div>
                                </div>

                                <div className={cx("tagline")}>
                                    <span>{movie.tagline}</span>
                                </div>

                                <div className={cx("overview")}>
                                    <p>{movie.overview}</p>
                                </div>
                            </div>
                        </div>

                        <CastList category={category} movieId={id} />

                        <VideoList category={category} movieId={id} />

                        <div className="similar" style={{ padding: "0 3rem" }}>
                            <h2>Similar</h2>
                            <MovieSlide category={category} type="similar" movieId={id} />
                        </div>

                    </>
                )
            }
        </>
    );
}

export default MovieDetail;