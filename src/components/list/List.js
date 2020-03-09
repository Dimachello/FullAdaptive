import React from 'react';

const List = (props) => {
    return (
        <ul className={props.class}>
            {props.children}
        </ul>
    );
};

export default List