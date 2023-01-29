import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import className from "classnames/bind";

import styles from "./Header.module.scss";
import logo from "../../assets/qmovie.png";

import headerNav from "../../config/headerNav";

const cx = className.bind(styles);

function Header() {
    const headerRef = useRef();
    const mobileNavRef = useRef();

    const { pathname } = useLocation();

    const activeIndex = headerNav.findIndex(item => item.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > 100) {
                headerRef.current.classList.add(cx("shrink"));
            }
            else {
                headerRef.current.classList.remove(cx("shrink"));
            }
        }

        window.addEventListener("scroll", shrinkHeader);

        return () => {
            window.removeEventListener("scroll", shrinkHeader)
        }
    }, []);

    const handleOpenMobileNav = () => {
        mobileNavRef.current.style.transform = "translateX(0%)";
        document.documentElement.style.overflow = "hidden";
    }

    const handleCloseMobileNav = () => {
        mobileNavRef.current.style.transform = "translateX(-100%)";
        document.documentElement.style.overflow = "unset";
    }

    return (
        <div className={cx("container")}>
            <header ref={headerRef} className={cx("header")}>
                <div className={cx("header__logo")}>
                    <Link to="/">
                        <img src={logo} alt="Back to home" />
                        <span>QMovies</span>
                    </Link>
                </div>


                <div className={cx("header__nav")}>
                    <ul>
                        {headerNav.map((item, index) => (
                            <li key={index} className={cx(index === activeIndex ? "active" : '')}>
                                <Link to={item.path}>
                                    {item.display.icon ?? ''}
                                    {item.display.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className={cx("header__menu-icon")}
                    onClick={handleOpenMobileNav}
                >
                    <i className='bx bx-menu'></i>
                </div>
            </header >

            <div ref={mobileNavRef} className={cx("mobile-nav")}>
                <div
                    className={cx("close-icon")}
                    onClick={handleCloseMobileNav}
                >
                    <i className='bx bx-window-close'></i>
                </div>
                <ul>
                    {headerNav.map((item, index) => (
                        <li
                            key={index}
                            className={cx(index === activeIndex ? "active" : '')}
                        >
                            <Link to={item.path}>
                                {item.display.title === "Search" ? '' : (item.display.icon ?? '')}
                                {item.display.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Header;