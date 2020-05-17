import React from 'react';
import './App.css';

import ButtonAppBar from './components/ButtonAppBar';
import LogCardsGrid from './components/LogCardsGrid';
import AddLogButton from './components/AddLogButton';

function App() {
  return (
    <div>
      <ButtonAppBar />
      <LogCardsGrid cards={[]} />
      <AddLogButton />
    </div>
  );
}

export default App;
