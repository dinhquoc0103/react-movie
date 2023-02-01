import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./PageHeader.module.scss";
import pageHeaderBackground from "../../assets/footer-bg.jpg";

const cx = classNames.bind(styles);

function PageHeader({ children }) {
    return (
        <div className={cx("page-header")} style={{ backgroundImage: `url(${pageHeaderBackground})` }}>
            <h1>{children}</h1>
        </div>
    );
}

PageHeader.propTypes = {
    children: PropTypes.node.isRequired
}

export default PageHeader;