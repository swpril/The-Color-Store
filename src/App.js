import React from 'react';
import Pallete from './Components/Palette';
import seedColors from './seedColors';

const App = () => {
  return (
    <div className="App">
      <Pallete {...seedColors} />
    </div>
  );
}

export default App;
