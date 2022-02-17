import React from 'react';

const ImageElement = ({image}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image.webformatURL} alt="" className="w-full"/>
        </div>
    )
};

export default ImageElement;