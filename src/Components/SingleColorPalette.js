import React from 'react';
import { useLocation } from 'react-router-dom';
const SingleColorPalette = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <span>Hi Single Color palette</span>
        </div>
    )
}

export default SingleColorPalette;