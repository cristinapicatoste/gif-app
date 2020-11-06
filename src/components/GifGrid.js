import React from 'react';
import GifGridItem from './GifGridItem';
import './GifGrid.css';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import getGifs from '../helpers/getGifs';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);
    console.log(loading);

    // const [images, setImages] = useState([]);
    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs))
    // }, [category])

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando gifs...</p>}
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
