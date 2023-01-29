import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import classNames from 'classnames/bind';
import styles from "./HeroSlider.module.scss";

const cx = classNames.bind(styles);

function HeroSlider() {
    SwiperCore.use([Autoplay]);

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
                <SwiperSlide>
                    <img src="https://image.tmdb.org/t/p/original//faXT8V80JRhnArTAeYXz0Eutpv9.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://image.tmdb.org/t/p/original//sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://image.tmdb.org/t/p/original//5pMy5LF2JAleBNBtuzizfCMWM7k.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HeroSlider;