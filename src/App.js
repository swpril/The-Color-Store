import React from 'react';
import Pallete from './Components/Palette';
import seedColors from './seedColors';
import { generatePalette } from './helpers/ColorHelper';

const App = () => {
  return (
    <div className="App">
      <Pallete palette={generatePalette(seedColors[8])} />
    </div>
  );
}

export default App;
