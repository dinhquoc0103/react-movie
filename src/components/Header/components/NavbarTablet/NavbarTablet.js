import { Link, useLocation } from "react-router-dom";
import className from "classnames/bind";
import styles from "./NavbarTablet.module.scss";

const cx = className.bind(styles);

function NavbarTablet({ headerNav, activeIndex }) {
    return (
        <div className={cx("header__nav-pc")}>
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
    );
}

export default NavbarTablet;