import React from 'react';
import './App.css';
import { LandingScreen } from './LandingScreen';
import { MSTProvider } from './state/MSTProvider';


export const App = () => (
    <MSTProvider>
     <LandingScreen />
    </MSTProvider>
  );