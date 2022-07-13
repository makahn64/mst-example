import React from 'react';
import { Button } from './components/Button';
import { ThemedButton } from './components/ThemedButton';
import { observer } from 'mobx-react-lite';
import { useApplicationState } from './state/MSTProvider';
import logo from './logo.svg';

export const LandingScreen = observer(() => {

    const state = useApplicationState();

    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo App-logo-${state.atomDirection}`} alt="logo" />
          <div style={{ display: 'flex', flexDirection: 'row'}}>
          <Button label='Reverse' onClick={state.reverseAtom} />
          <ThemedButton label="Darken" onClick={state.button.darkenBackground} />
          <ThemedButton label="Thicken" onClick={state.button.thickenBorder} />
          </div>
        </header>
        </div>
    )

})