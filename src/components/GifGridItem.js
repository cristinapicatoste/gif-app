import React from 'react';
import './GifGridItem.css';

const GifGridItem = ({ id, title, url }) => {

    return (
        <div className="GifGridItem-wrapper">
            <h4>{title}</h4>
            <img src={url} alt={title}/>
        </div>
    )
}

export default GifGridItem;
