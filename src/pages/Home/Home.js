import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import config from "../../config";

import HeroSlider from "./components/HeroSlider";
import Button from "../../components/Button";
import MovieSlide from "../../components/MovieSlide";

const cx = classNames.bind(styles);

function Home() {
    const categories = config.theMovieApi.categories;
    const movieType = config.theMovieApi.movieType;
    const tvType = config.theMovieApi.tvType;

    return (
        <>
            <HeroSlider />
            <section className="container">
                <div className={cx("slide")}>
                    <div className={cx("slide__top")}>
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <Button className={["btn", "btn--outline"]}>See All</Button>
                        </Link>
                    </div>
                    <div className={cx("slide__movies")}>
                        <MovieSlide category={categories.movie} type={movieType.popular} />
                    </div>
                </div>

                <div className={cx("slide")}>
                    <div className={cx("slide__top")}>
                        <h2>Top Rated</h2>
                        <Link to="/movie">
                            <Button className={["btn", "btn--outline"]}>See All</Button>
                        </Link>
                    </div>
                    <div className={cx("slide__movies")}>
                        <MovieSlide category={categories.movie} type={movieType.topRated} />
                    </div>
                </div>

                <div className={cx("slide")}>
                    <div className={cx("slide__top")}>
                        <h2>Trending TVs</h2>
                        <Link to="/movie">
                            <Button className={["btn", "btn--outline"]}>See All</Button>
                        </Link>
                    </div>
                    <div className={cx("slide__movies")}>
                        <MovieSlide category={categories.tv} type={tvType.popular} />
                    </div>
                </div>

                <div className={cx("slide")}>
                    <div className={cx("slide__top")}>
                        <h2>Top Rated</h2>
                        <Link to="/movie">
                            <Button className={["btn", "btn--outline"]}>See All</Button>
                        </Link>
                    </div>
                    <div className={cx("slide__movies")}>
                        <MovieSlide category={categories.tv} type={tvType.topRated} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;