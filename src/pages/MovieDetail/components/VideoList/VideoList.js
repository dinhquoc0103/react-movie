import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./VideoList.module.scss";
import services from "../../../../services";
import dateFormat from "../../../../utils/dateFormat";

const cx = classNames.bind(styles);

function VideoList({ category, movieId }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const response = await services.getVideoList(category, movieId);
            const videoList = response.results;
            setVideos(videoList.length > 6 ? videoList.slice(0, 6) : videoList);
        }

        getVideos();
    }, [category, movieId]);

    return (
        <div className={cx("video")}>
            <h2 className={cx("video__title")}>Related Videos</h2>
            <div className={cx("video__list")}>
                {
                    videos.length > 0
                        ?
                        <ul>
                            {
                                videos.map(video => (
                                    <li className={cx("video-item")}>
                                        <h4 className={cx("video-item__name")}>
                                            {video.name} ({dateFormat(video.published_at)})
                                        </h4>
                                        <div className={cx("video-item__video")}>
                                            <iframe src={`https://www.youtube.com/embed/${video.key}`}></iframe>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        :
                        <div className={cx("no-video-yet")}>
                            <p>There are no videos yet</p>
                        </div>
                }
            </div>
        </div >
    );
}

VideoList.propTypes = {
    category: PropTypes.string.isRequired,
    movieId: PropTypes.number.isRequired,
}

export default VideoList;