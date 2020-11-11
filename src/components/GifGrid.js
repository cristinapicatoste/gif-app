import React from 'react';
import GifGridItem from './GifGridItem';
import './GifGrid.css';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);
    console.log(loading);

    return (
        <>
            <h3>{category}</h3>
            {/* {loading && <p>Buscando gifs..</p>} */}
            <div className="GifGrid-cardGrid">
                {
                    images.map((img) => <GifGridItem key={img.id} {...img} />)
                }
            </div>
        </>
    )
}

export default GifGrid;
