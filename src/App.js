import React from 'react';
import './App.css';

import ButtonAppBar from './components/ButtonAppBar';
import LogCardsGrid from './components/LogCardsGrid';
import AddLogButton from './containers/AddLogButton';
import AddNewLogDialog from './containers/AddNewLogDialog';


function App() {
  return (
    <div>
      <ButtonAppBar />
      <AddNewLogDialog />
      <LogCardsGrid cards={[]} />
      <AddLogButton />
    </div>
  );
}

export default App;
