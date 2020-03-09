import React from 'react';

const PostAux = React.forwardRef((props,ref) => (
    <div ref={ref} className={props.class}>
        {props.children}
    </div>
))

export default PostAux;