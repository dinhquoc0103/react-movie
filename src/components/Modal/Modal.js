import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

function Modal({
    defaultDimension = true,
    modalWidth,
    modalHeight,
    children
}) {
    const modalRef = useRef();
    const modalWidgetRef = useRef();

    useEffect(() => {
        if (defaultDimension) {
            modalWidgetRef.current.style.width = "50%";
            modalWidgetRef.current.style.height = "50%";
        }
        else {
            modalWidgetRef.current.style.width = modalWidth;
            modalWidgetRef.current.style.height = modalHeight;
        }
    }, []);

    const handleClose = () => {
        Object.assign(modalRef.current.style, {
            opacity: 1,
            visibility: "visible",
        });
    }

    return (
        <div ref={modalRef} className={cx("modal", "modal-selector")}>
            <div ref={modalWidgetRef} className={cx("modal-widget")}>
                <div
                    className={cx("modal-widget__close")}
                    onClick={handleClose}
                >
                    <i className={cx("bx bx-x")} ></i>
                </div >
                <div className={cx("modal_widget__content")} >
                    {children}
                </div >
            </div >
        </div >
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired
}

export default Modal;

