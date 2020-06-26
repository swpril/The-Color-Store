import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Components/Palette';
import SingleColorPalette from './Components/SingleColorPalette';
import NewPaletteForm from './Components/NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './helpers/ColorHelper';
import PaletteList from './Components/PaletteList';

const App = () => {

  const findPalette = (id) => {
    return seedColors.find((palette) => { return palette.id === id })
  }
  return (
    <div>
      <Switch>
        <Route exact path='/palette/new' render={() => <NewPaletteForm />} />
        <Route
          exact
          path='/'
          render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
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
