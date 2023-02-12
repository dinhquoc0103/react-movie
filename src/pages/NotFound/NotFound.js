import classNames from "classnames/bind";

import styles from "./NotFound.module.scss";

import PageHeader from "../../components/PageHeader";

const cx = classNames.bind(styles);

function NotFound() {
    return (
        <>
            <PageHeader />
            <div className="container">
                <div className={cx("not-found")}>
                    <h1>404 Not Found!</h1>
                </div>
            </div>
        </>
    );
}

export default NotFound;