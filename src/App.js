import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom';
import {
  Palette,
  NewPaletteForm,
  SingleColorPalette,
  PaletteList,
  Page
} from './components/index';
import seedColors from './seed-colors';
import { generatePalette } from './helpers/color-helper';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const App = () => {
  const savedPalettes = JSON.parse(localStorage.getItem('palettes'));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);
  const [flag, setFlag] = useState(false);
  const findPalette = id => {
    return palettes.find(palette => {
      return palette.id === id;
    });
  };
  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
    setFlag(true);
  };
  if (flag) {
    (function syncLocalStorage() {
      localStorage.setItem('palettes', JSON.stringify(palettes));
    })();
    setFlag(false);
  }

  const deletePalette = id => {
    const plx = palettes.filter(p => p.id !== id);
    setPalettes(palettes => plx);
    setFlag(true);
  };
  return (
    <div>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              classNames='fade'
              className='page'
              timeout={500}
              key={location.key}
            >
              <Switch location={location}>
                <Route
                  exact
                  path='/palette/new'
                  render={() => (
                    <Page>
                      <NewPaletteForm
                        savePalette={savePalette}
                        palettes={palettes}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/'
                  render={routeProps => (
                    <Page>
                      <PaletteList
                        palettes={palettes}
                        {...routeProps}
                        deletePalette={deletePalette}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/palette/:id'
                  render={routeProps => (
                    <Page>
                      <Palette
                        palette={generatePalette(
                          findPalette(routeProps.match.params.id)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/palette/:paletteID/:colorID'
                  render={routeProps => (
                    <Page>
                      <SingleColorPalette
                        palette={generatePalette(
                          findPalette(routeProps.match.params.paletteID)
                        )}
                        colorID={routeProps.match.params.colorID}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
};

export default App;
