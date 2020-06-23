import React from 'react';
import { Link } from 'react-router-dom';

const PaletteList = (props) => {
    console.log(props);
    return (
        <div>
            {props.palettes.map((palette) => {
                return (
                    <Link to={`/${palette.id}`} key={palette.id}>{palette.paletteName}</Link >
                )
            })}
        </div>
    )
};

export default PaletteList;