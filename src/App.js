import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Components/Palette';
import SingleColorPalette from './Components/SingleColorPalette';
import NewPaletteForm from './Components/NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './helpers/ColorHelper';
import PaletteList from './Components/PaletteList';

const App = () => {

  const [palettes, setPalettes] = useState(seedColors);
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  }
  const findPalette = (id) => {
    return palettes.find((palette) => { return palette.id === id })
  }
  return (
    <div>
      <Switch>
        <Route exact path='/palette/new' render={() => <NewPaletteForm savePalette={savePalette} />} />
        <Route
          exact
          path='/'
          render={(routeProps) => <PaletteList palettes={palettes} {...routeProps} />} />
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
