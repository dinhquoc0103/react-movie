import { useEffect, useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import classNames from 'classnames/bind';
import styles from "./HeroSlider.module.scss";

import getMovieList, { movieType } from '../../../../services/getMovieList';
import config from '../../../../config';

const cx = classNames.bind(styles);

function HeroSlider() {
    SwiperCore.use([Autoplay]);

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const response = await getMovieList(movieType.upcoming, { page: 1 });
            setMovies(response.results.slice(0, 8));
        }
        getMovies();

    }, []);

    return (
        <div className={cx("hero-slide")} style={{ display: "flex" }}>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                speed={3000}
                loop={true}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
            >
                {movies.map((movie, index) => (
                    <SwiperSlide key={index}>
                        <img src={config.theMovieApi.originalImg(movie.backdrop_path)} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HeroSlider;