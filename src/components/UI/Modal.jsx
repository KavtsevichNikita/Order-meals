import React, { Fragment } from 'react';
import  ReactDOM  from 'react-dom';
import classes from './Modal.module.css'


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}


const portalElememt = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElememt)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElememt)}
        </Fragment>
    );
};

export default Modal;