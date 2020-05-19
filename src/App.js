import React from 'react';

import './App.css';

import ButtonAppBar from './components/ButtonAppBar';
import LogCardsTable from './containers/LogCardsTable';
import AddLogButton from './containers/AddLogButton';
import AddNewLogDialog from './containers/AddNewLogDialog';
import Notification from './containers/Notification';

function App() {
  return (
    <div>
      <ButtonAppBar />
      <AddNewLogDialog />
      <LogCardsTable />
      <AddLogButton />
      <Notification />
    </div>
  );
}

export default App;
