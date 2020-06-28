import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Components/Palette';
import SingleColorPalette from './Components/SingleColorPalette';
import NewPaletteForm from './Components/NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './helpers/ColorHelper';
import PaletteList from './Components/PaletteList';

const App = () => {
  const savedPalettes = JSON.parse(localStorage.getItem('palettes'));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);
  const [flag, setFlag] = useState(false);
  const findPalette = (id) => {
    return palettes.find((palette) => { return palette.id === id })
  }
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
    setFlag(true);
  }
  if (flag) {
    (function syncLocalStorage() {
      localStorage.setItem('palettes', JSON.stringify(palettes));
    })()
    setFlag(false);
  }

  const deletePalette = (id) => {
    const plx = palettes.filter((p) => p.id !== id)
    setPalettes(palettes => plx);
    setFlag(true);
  }
  return (
    <div>
      <Switch>
        <Route exact path='/palette/new' render={() => <NewPaletteForm savePalette={savePalette} palettes={palettes} />} />
        <Route
          exact
          path='/'
          render={(routeProps) => <PaletteList palettes={palettes} {...routeProps} deletePalette={deletePalette} />} />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
        />
        <Route
          exact
          path='/palette/:paletteID/:colorID'
          render={(routeProps) => <SingleColorPalette
            palette={generatePalette(findPalette(routeProps.match.params.paletteID))}
            colorID={routeProps.match.params.colorID}
          />}
        />
      </Switch>

      {/* <div className="App">
        <Pallete palette={generatePalette(seedColors[8])} />
      </div> */}
    </div>
  );
}

export default App;
