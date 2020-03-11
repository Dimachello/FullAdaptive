import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
    return (
       <li className={props.class} onClick={props.click}><Link to={props.path}>{props.text}</Link></li>
    );
};

export default ListItem;