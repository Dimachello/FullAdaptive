import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    return (
        <div className={classes.Backdrop} onClick={props.hide}></div>
    )
}

export default Backdrop;