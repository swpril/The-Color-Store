import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Components/Palette';
import seedColors from './seedColors';
import { generatePalette } from './helpers/ColorHelper';

const App = () => {

  const findPalette = (id) => {
    return seedColors.find((palette) => { return palette.id === id })
  }
  return (
    <div>
      <Switch>
        <Route exact path='/' />
        <Route exact path='/:id'
          render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
        />
      </Switch>

      {/* <div className="App">
        <Pallete palette={generatePalette(seedColors[8])} />
      </div> */}
    </div>
  );
}

export default App;
