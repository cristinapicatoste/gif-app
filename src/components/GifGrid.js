import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';
import './GifGrid.css';
import getGifs from '../helpers/getGifs';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(imgs => setImages(imgs))
    }, [category])

    return (
        <>
            <h3>{category}</h3>
            <div className="GifGrid-cardGrid">
                {
                    images.map((img) => <GifGridItem key={img.id} {...img} />)
                }
            </div>
        </>
    )
    //     <ol>
    //     {/* {images.map(img => <li key={img.id}>{img.title}</li>)} */}
    //     {/* Lo mismo, pero desestructurando */}
    //     {images.map(({ id, title }) => <li key={id}>{title}</li>)}

    //     {images.map(img => <p>{img.url}</p>)}
    // </ol>
}

export default GifGrid;
