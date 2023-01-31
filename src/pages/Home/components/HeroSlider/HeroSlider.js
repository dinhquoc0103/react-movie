import { useEffect, useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import classNames from 'classnames/bind';
import styles from "./HeroSlider.module.scss";

import getMovieList, { movieType } from '../../../../services/getMovieList';

import HeroSliderItem from '../HeroSliderItem';
import TrailerPopup from "../TrailerPopup";

const cx = classNames.bind(styles);

function HeroSlider() {
    SwiperCore.use([Autoplay]);

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const response = await getMovieList(movieType.popular, { page: 1 });
            setMovies(response.results.slice(4, 12));
        }
        getMovies();

    }, []);

    return (
        <div className={cx("hero-slider")}>
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
                        {({ isActive }) => (
                            <HeroSliderItem
                                movie={movie}
                                className={`${isActive ? 'active' : ''}`}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {movies.map((movie, index) => (
                <TrailerPopup key={index} movie={movie} />
            ))}
        </div>
    );
}



export default HeroSlider;