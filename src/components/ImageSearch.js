import ImageSearchForm from "./ImageSearchForm";
import React, {useState, useEffect} from 'react';
import ImageElement from "./ImageElement";
import {transformTermForApi} from "../transformers/ImageSearchTransformers";

const ImageSearch = () => {
    const [images, setImages] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [term, setTerm] = useState('');

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        (async () => {
            try {
                const res = await fetch(`https://pixabay.com/api/?key=17555297-46a99d3dc7abf78679ec9e640&q=${transformTermForApi(term)}&image_type=photo&pretty=true`)
                if (res.status !== 200) {
                    setIsError(true);
                }
                const data = await res.json();
                setImages(data.hits);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [term]);

    return (
        <>
            <ImageSearchForm searchText={(text) => setTerm(text)}/>
            {!isLoading && images.length === 0 && term.length > 0 &&
                <h1 className="text-5xl text-center mx-auto text-teal-500 mt-32">Aucune image trouvée</h1>
            }
            {isError && <h1 className="text-5xl text-center text-red-700 mx-auto mt-32">Une erreur s'est produite</h1>}

            {isLoading ? <h1 className="text-6xl text-center text-teal-500 mx-auto mt-32">Chargement...</h1> :
                <div className="grid grid-cols-3 gap-4">
                    {images.map(image => (
                        <ImageElement key={image.id} image={image}/>
                    ))}
                </div>
            }
        </>
    )
}


export default ImageSearch;