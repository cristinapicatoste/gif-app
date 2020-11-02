import React from 'react'

const GifGrid = ({ category }) => {
    const getGif = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=love&limit=10&api_key=Yv3ObeYFk8qkgLC2fuzBdaebz3CTQgVQ';
        const res = await fetch(url);
        const data = await res.json();
    }

    return (
        <>
            <li>{category}</li>
        </>
    )
}

export default GifGrid;
