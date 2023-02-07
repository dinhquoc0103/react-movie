import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import 'swiper/css';
import styles from "./CastList.module.scss";
import services from "../../../../services";
import config from "../../../../config";
import noImage from "../../../../assets/no-img-available.jpg";

const cx = classNames.bind(styles);

function CastList({ category, movieId }) {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const response = await services.getCredits(category, movieId);
            setCast(response.cast);
        }

        getCredits();
    }, [category, movieId]);

    return (
        <div className={cx("cast")}>
            <h2 className={cx("cast__title")}>{category === "tv" ? "Series Cast" : "Top Billed Cast"}</h2>
            <div className={cx("cast__list")}>
                <Swiper
                    grabCursor={true}
                    spaceBetween={12}
                    slidesPerView={"auto"}
                >
                    {
                        cast.map(cast => (
                            <SwiperSlide className={cx("swiper-slider")} >
                                <div key={cast.id} className={cx("cast__item")}>
                                    <div className={cx("image")}>
                                        {console.log(cast.profile_path)}
                                        <img
                                            src={cast.profile_path !== null ? config.theMovieApi.originalImg(cast.profile_path) : noImage}
                                            alt=""
                                        />
                                    </div>
                                    <p className={cx("name")}>
                                        {cast.name || cast.original_name}
                                    </p>
                                    <p className={cx("charactor")}>
                                        {cast.character}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper >

            </div >
        </div >
    );
}

CastList.propTypes = {
    category: PropTypes.string.isRequired,
    movieId: PropTypes.number.isRequired,
}

export default CastList;