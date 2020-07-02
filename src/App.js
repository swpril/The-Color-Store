import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Components/Palette';
import SingleColorPalette from './Components/SingleColorPalette';
import NewPaletteForm from './Components/NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './helpers/ColorHelper';
import PaletteList from './Components/PaletteList';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

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

      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition classNames='fade' timeout={500} key={location.key} >
            <Switch location={location}>
              <Route
                exact
                path='/palette/new'
                render={() => (
                  <div className='page'>
                    <NewPaletteForm savePalette={savePalette} palettes={palettes} />
                  </div>
                )} />
              <Route
                exact
                path='/'
                render={(routeProps) => (
                  <div className='page'>
                    <PaletteList palettes={palettes} {...routeProps} deletePalette={deletePalette} />
                  </div>
                )} />
              <Route
                exact
                path='/palette/:id'
                render={(routeProps) =>
                  (<div className='page'> <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} /></div>)
                }
              />
              <Route
                exact
                path='/palette/:paletteID/:colorID'
                render={(routeProps) =>
                  (
                    <div className='page'>
                      <SingleColorPalette
                        palette={generatePalette(findPalette(routeProps.match.params.paletteID))}
                        colorID={routeProps.match.params.colorID}
                      />
                    </div>
                  )
                }
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
}

export default App;
