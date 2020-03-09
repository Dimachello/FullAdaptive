import React from 'react';
import classes from './Logo.module.css';
import LogoPicture from '../../imgs/logo/Logo2.png';

const Logo = (props) => {

    return (
        props.isShown ? 
        <div className={classes.LogoWrapper}>
            <img src={LogoPicture} className={classes.LogoPicture} alt="logo"/>
        </div> : null
    );
};

export default Logo;