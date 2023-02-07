import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import logo from "../../assets/qmovie.png";
import footerBackground from "../../assets/footer-bg.jpg";

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer>
            <div className={cx("footer")} style={{ backgroundImage: `url(${footerBackground})` }}>
                <div className={cx("footer-content", "container")}>
                    <div className={cx("footer-content__logo")}>
                        <Link to="/">
                            <img src={logo} alt="Back to home" />
                            {/* <span>QMovies</span> */}
                        </Link>
                    </div>

                    <div className={cx("footer-content__menus")}>
                        <div className={cx("footer-content__menu")} >
                            <Link to="/">Home</Link>
                            <Link to="/">Contact Us</Link>
                            <Link to="/">Term Of Services</Link>
                            <Link to="/">About Us</Link>
                        </div>

                        <div className={cx("footer-content__menu")} >
                            <Link to="/">Live</Link>
                            <Link to="/">FAQ</Link>
                            <Link to="/">Premium</Link>
                            <Link to="/">Privacy Policy</Link>
                        </div>

                        <div className={cx("footer-content__menu")} >
                            <Link to="/">You Must Watch</Link>
                            <Link to="/">Recent Release</Link>
                            <Link to="/">Maybe Like This</Link>
                            <Link to="/">Top IMDB</Link>
                        </div>
                    </div>
                </div >
            </div >
        </footer >
    );
}

export default Footer;