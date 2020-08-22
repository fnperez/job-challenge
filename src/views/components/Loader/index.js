import React from 'react';
import { Spinner } from 'react-bootstrap';
import './index.scss';

const Loader = ({hidden, ...props}) => {
    const className = ["Loader", hidden ? "Loader--hide" : null]
    return (
        <div className={className.join(" ")}>
            <Spinner className="Loader_icon" {...props} hidden={hidden} animation="grow" />
        </div>
    )
}

export default Loader;