import React from 'react';
import { Spinner } from 'react-bootstrap';
import './index.scss';

const Loader = ({hidden}) => {
    const className = ["Loader", hidden ? "Loader--hide" : null]
    return (
        <div className={className.join(" ")}></div>
    )
}

export default Loader;