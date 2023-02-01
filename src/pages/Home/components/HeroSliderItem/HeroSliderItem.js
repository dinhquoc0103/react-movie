import { useNavigate } from "react-router-dom";
import PropTypes, { object } from "prop-types";
import classNames from "classnames/bind";
import styles from "./HeroSliderItem.module.scss";

import getVideoList from '../../../../services/getVideoList';
import config from '../../../../config';

import Button from "../../../../components/Button";

const cx = classNames.bind(styles);

function HeroSliderItem({ movie, className }) {
    const navigate = useNavigate();
    const categories = config.theMovieApi.categories;

    const background = config.theMovieApi.originalImg(
        movie.backdrop_path ?? movie.poster_path
    );

    const handleOpenTrailerPopup = async () => {
        const trailerPopup = document.querySelector(`#trailer-popup-${movie.id}`);
        const videos = await getVideoList(categories.movie, movie.id);

        if (videos.results.length > 0) {
            const videoSrc = `https://www.youtube.com/embed/${videos.results[0].key}`;
            trailerPopup.querySelector("iframe").src = videoSrc;
        }
        else {
            trailerPopup.appendChild = `<div>
                                            <h2>No trailer</h2>
                                        </div>`;
        }

        Object.assign(trailerPopup.style, {
            opacity: 1,
            visibility: "visible",
        });

        Object.assign(trailerPopup.firstElementChild.style, {
            transform: "translateY(0)"
        });
    }



    return (
        <div
            className={cx("hero-slider-item", className)}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className={cx("hero-slider-item-content", "container")}>
                <div className={cx("hero-slider-item-content__poster")}>
                    <img src={config.theMovieApi.w500Img(movie.poster_path)} alt="" />
                </div>
                <div className={cx("hero-slider-item-content__info")}>
                    <h2 className={cx("title")}>{movie.title}</h2>
                    <div className={cx("overview")}>{movie.overview}</div>
                    <div className={cx("btns")}>
                        <Button
                            className={["btn", "btn--main"]}
                            onClick={() => navigate(`/movie/${movie.id}`)}
                        >
                            Watch now!
                        </Button>
                        <Button
                            className={["btn", "btn--outline"]}
                            onClick={handleOpenTrailerPopup}
                        >
                            Trailer!
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}


HeroSliderItem.propTypes = {
    movie: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
}

export default HeroSliderItem;