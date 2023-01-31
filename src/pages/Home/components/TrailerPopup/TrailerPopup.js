import { useRef } from "react";
import PropTypes, { object } from "prop-types";
import classNames from "classnames/bind";
import styles from "./TrailerPopup.module.scss";

const cx = classNames.bind(styles);

function TrailerPopup({ movie }) {
    const trailerPopupRef = useRef();

    const handleCloseTrailerPopup = () => {
        trailerPopupRef.current.querySelector("iframe").src = "";
        Object.assign(trailerPopupRef.current.style, {
            opacity: 0,
            visibility: "hidden"
        });
    }

    return (
        <div ref={trailerPopupRef} className={cx("trailer-popup")} id={`trailer-popup-${movie.id}`}>
            <div className={cx("trailer-popup-content")}>
                <iframe
                    src=""
                    frameBorder="0"
                    width="100%"
                    height="100%"
                >

                </iframe>
                <div
                    className={cx("trailer-popup-content__close")}
                    onClick={handleCloseTrailerPopup}
                >
                    <i className="bx bx-x"></i>
                </div>
            </div>

        </div >
    );
}

TrailerPopup.propTypes = {
    movie: PropTypes.object.isRequired,
}

export default TrailerPopup;