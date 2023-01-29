import { Link, useLocation } from "react-router-dom";
import className from "classnames/bind";
import styles from "./Header.module.scss";
import logo from "../../assets/qmovie.png";
import NavbarTablet from "./components/NavbarTablet";
import NavbarMobile from "./components/NavbarMobile";

const cx = className.bind(styles);

const headerNav = [
    {
        display: {
            title: "Home",
            icon: ""
        },
        path: '/',
    },
    {
        display: {
            title: "Movies",
            icon: ""
        },
        path: '/movies',
    },
    {
        display: {
            title: "TV Series",
            icon: ""
        },
        path: '/tvSeries',
    },
    {
        display: {
            title: "Search",
            icon: < i className='bx bx-search' ></i>
        },
        path: '/search',
    },
];

function Header() {
    const { pathname } = useLocation();

    const activeIndex = headerNav.findIndex(item => item.path === pathname);

    return (
        <div className={cx("container")}>
            <header className={cx("header")}>
                <div className={cx("header__logo")}>
                    <Link to="/">
                        <img src={logo} alt="Back to home" />
                        <span>QMovies</span>
                    </Link>
                </div>

                <NavbarTablet headerNav={headerNav} activeIndex={activeIndex} />
            </header >

            <NavbarMobile headerNav={headerNav} activeIndex={activeIndex} />
        </div>
    );
}

export default Header;