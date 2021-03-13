import React, { useState } from 'react';

import { ColorBox } from '../color-box/color-box.component';
import { NavBar } from '../nav-bar/nav-bar.component';
import { PaletteFooter } from './palette-footer/palette-footer.component';

import useStyles from './palette.styles';

const Palette = props => {
  const classes = useStyles();
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hexValue');
  const handleChange = level => {
    setLevel(level);
  };
  const handleSelect = e => {
    setFormat(e);
  };
  const colorBox = props.palette.colors[level].map(color => (
    <ColorBox
      background={color[format]}
      key={color.id}
      name={color.name}
      id={color.id}
      paletteId={props.palette.id}
      showingFullPalette={true}
    />
  ));
  return (
    <div className={classes.palette}>
      <NavBar
        level={level}
        handleChange={handleChange}
        handleSelect={handleSelect}
        showingAll={true}
      />
      <div className={classes.paletteColors}>{colorBox}</div>
      <PaletteFooter
        name={props.palette.paletteName}
        emoji={props.palette.emoji}
      />
    </div>
  );
};

export { Palette };
