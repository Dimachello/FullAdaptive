import React from 'react';
import classes from './Error.module.css';
import {Link} from 'react-router-dom';

const Error = () => {
    return (
        <div className={classes.ErrorWrapper}>
            <span>404</span>
            <h1>Something went wrong ...</h1>
            <h2>Go back to <Link to="/">main</Link> page</h2>
        </div>
    )
}

export default Error;