import { useRef } from "react";
import classNames from "classnames/bind";

import styles from "./MainLayout.module.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("content")}>
                {children}
            </div>
            <Footer />
        </div >
    );
}

export default MainLayout;