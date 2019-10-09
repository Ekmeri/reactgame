import React from 'react';
import './App.css';
import Result from './Result/Result';
import ButtonContainer from './ButtonContainer/ButtonContainer';
//import Overlay from './Overlay/Overlay';
//import HighScore from '/HighScore/HighScore'

const App = () => {
  return (
    <div className="App">
      <Result/>
      <ButtonContainer/>
    </div>
  );
}

export default App;