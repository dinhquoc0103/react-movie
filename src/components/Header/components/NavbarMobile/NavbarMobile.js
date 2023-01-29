import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import className from "classnames/bind";
import styles from "./NavbarMobile.module.scss";

const cx = className.bind(styles);

function NavbarMobile({ headerNav, activeIndex }) {
    const navbarRef = useRef();
    const menuIconRef = useRef();

    const handleOpenNavbarMobile = () => {
        navbarRef.current.style.transform = "translateX(0)";
        menuIconRef.current.style.display = "none";
    }

    const handleCloseNavbarMobile = () => {
        navbarRef.current.style.transform = "translateX(-100%)";
        menuIconRef.current.style.display = "block";
    }

    return (
        <div className={cx("header__nav-mobile")}>
            <div
                ref={menuIconRef}
                className={cx("menu-icon")}
                onClick={handleOpenNavbarMobile}
            >
                <i className='bx bx-menu'></i>
            </div>

            <ul ref={navbarRef} className={cx("overlay")}>
                <div
                    className={cx("close-icon")}
                    onClick={handleCloseNavbarMobile}
                >
                    <i className='bx bx-window-close'></i>
                </div>

                {headerNav.map((item, index) => (
                    <li
                        key={index}
                        className={cx(index === activeIndex ? "active" : '')}
                        onClick={handleCloseNavbarMobile}
                    >
                        <Link to={item.path}>
                            {item.display.title === "Search" ? '' : (item.display.icon ?? '')}
                            {item.display.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavbarMobile;