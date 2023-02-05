import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./MovieCard.module.scss";

import config from "../../config";

import Button from "../Button";

const cx = classNames.bind(styles);

function MovieCard({ movie, category }) {

    const detailLink = `/${category ?? movie.media_type}/${movie.id}`;
    const backgroundImg = config.theMovieApi.w500Img(movie.poster_path || movie.backdrop_path);

    return (
        <Link to={detailLink}>
            <div className={cx("movie-card")}>
                <div className={cx("movie-card__img")} style={{ backgroundImage: `url(${backgroundImg})` }}>
                    <Button className={["btn", "btn--main"]}>
                        <i className="bx bx-play"></i>
                    </Button>
                </div>
                <h4 className={cx("movie-card__title")}>{(movie.title ?? movie.original_title) || (movie.name ?? movie.original_name)}</h4>
            </div>
        </Link>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired
}

export default MovieCard;