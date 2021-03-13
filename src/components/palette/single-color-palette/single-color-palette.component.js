import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { ColorBox } from '../../color-box/color-box.component';
import { NavBar } from '../../nav-bar/nav-bar.component';
import { PaletteFooter } from '../palette-footer/palette-footer.component';

import useStyles from './single-color-palette.styles';

const SingleColorPalette = props => {
  const history = useHistory();
  const [format, setFormat] = useState('hexValue');
  const handleSelect = e => {
    setFormat(e);
  };

  const gatherShades = (palette, colorID) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorID)
      );
    }
    return shades.slice(1);
  };
  const [_shades] = useState(gatherShades(props.palette, props.colorID));
  const colorBoxes = _shades.map(color => (
    <ColorBox
      key={color.hexValue}
      name={color.name}
      background={color[format]}
      showingFullPalette={false}
    />
  ));
  const handleBack = () => {
    history.goBack();
  };
  const classes = useStyles();
  return (
    <div>
      <div className={classes.palette}>
        <NavBar handleSelect={handleSelect} showingAll={false} />
        <div className={classes.paletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <button onClick={handleBack}>Go Back</button>
          </div>
        </div>
      </div>
      <PaletteFooter
        name={props.palette.paletteName}
        emoji={props.palette.emoji}
      />
    </div>
  );
};

export { SingleColorPalette };
