import React from 'react';

import './App.css';

import ButtonAppBar from './containers/ButtonAppBar';
import LogCardsTable from './containers/LogCardsTable';
import AddLogButton from './containers/AddLogButton';
import AddNewLogDialog from './containers/AddNewLogDialog';
import Notification from './containers/Notification';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <div>
      <SnackbarProvider maxSnack={3}>
      <React.Fragment>
        <ButtonAppBar />
        <AddNewLogDialog />
        <LogCardsTable />
        <AddLogButton />
        <Notification />
      </React.Fragment>
      </SnackbarProvider>    
    </div>
  );
}

export default App;
