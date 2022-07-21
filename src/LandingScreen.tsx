import React from 'react';
import { Button } from './components/Button';
import { ThemedButton } from './components/ThemedButton';
import { observer } from 'mobx-react-lite';
import { useApplicationState } from './state/MSTProvider';
import logo from './logo.svg';
import { ExpandableBox } from './components/ExpandingBox';

const SmallSquare = () =>  <div style={{ minWidth: '120px', height: '120px', backgroundColor: 'teal', margin: '10px'}}/>
const BigSquare = () =>  <div style={{ minWidth: '240px', height: '240px', backgroundColor: 'red', margin: '10px'}}/>
const WideSquare = () =>  <div style={{ minWidth: '240px', height: '120px', backgroundColor: 'green', margin: '10px'}}/>
const VeryWideSquare = () =>  <div style={{ minWidth: '360px', height: '120px', backgroundColor: 'wheat', margin: '10px'}}/>


export const LandingScreen = observer(() => {

    const state = useApplicationState();

    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo App-logo-${state.atomDirection}`} alt="logo" />
          <div style={{ display: 'flex', flexDirection: 'row', maxWidth: '60vw', border: '2px solid red', flexWrap: 'wrap'}}>
          <ExpandableBox color='salmon'/>
          <ExpandableBox color='dodgerblue'/>
          <SmallSquare />
          <WideSquare />
          <ExpandableBox />
          <VeryWideSquare />
          <BigSquare />
          <SmallSquare />
          </div>
          <div>
          <Button label='Reverse' onClick={state.reverseAtom} />
          <ThemedButton label="Darken" onClick={state.button.darkenBackground} />
          <ThemedButton label="Thicken" onClick={state.button.thickenBorder} />
          </div>
        </header>
        </div>
    )

})