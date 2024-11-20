import React, { useState } from 'react';
import trophy from './images/trophy.png';
import Picker from 'react-mobile-picker';

import './App.css';

function App() {
  const [valueGroups, setValueGroups] = useState({
    day: '1',
    month: 'January',
    year: '2023',
  });

  const optionGroups = {
    day: Array.from({ length: 31 }, (_, i) => (i + 1).toString()),
    month: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    year: Array.from({ length: 100 }, (_, i) => (2023 - i).toString()),
  };

  console.log('banana',optionGroups)
  return (
    <div className="App">
      <header className="App-header">
        <img src={trophy} className="App-trophy" alt="trophy" />
        <p>
          Voce está a 3 dias sem fumar, parabéns!!!
        </p>
        <p>Aqui pode ter um tracker de quantos dias voce esta sem fumar</p>
        <p>Vixe fumei, e agora?</p>
        <p>Nao tem problema, atualize aqui o último dia que você fumou</p>
        <Picker className='picker'  value={valueGroups} onChange={setValueGroups} wheelMode="normal">
          {Object.keys(optionGroups).map(name => (
            <Picker.Column className='picker-column' key={name} name={name}>
              {optionGroups[name].map(option => (
                <Picker.Item className={`picker-item-${valueGroups[name] === option ? 'selected' : 'unselected'}`} key={option} value={option}>
                  {option}
                </Picker.Item>
              ))}
          </Picker.Column>))}
        </Picker>
      </header>
    </div>
  );
}

export default App;
