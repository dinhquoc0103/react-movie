import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./HeroSliderItem.module.scss";

import config from '../../../../config';

import Button from "../../../../components/Button";

const cx = classNames.bind(styles);


function HeroSliderItem({ movie, className }) {
    const navigate = useNavigate();

    const background = config.theMovieApi.originalImg(
        movie.backdrop_path ?? movie.poster_path
    );

    console.log(background);

    return (
        <div
            className={cx("hero-slider-item", className)}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className={cx("hero-slider-item-content", "container")}>
                <div className={cx("hero-slider-item-content__poster")}>
                    <img src={config.theMovieApi.w500Img(movie.poster_path)} />
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
                            onClick={() => console.log("trailer")}
                        >
                            Trailer!
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HeroSliderItem;