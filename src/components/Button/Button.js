import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ className, children, onClick }) {
    return (
        <button
            className={cx(className)}
            onClick={onClick ? () => onClick() : null}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.array,
    children: PropTypes.node,
    onClick: PropTypes.func,
};



export default Button;