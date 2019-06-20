import React from 'react'
import Window from './components/auth_register/Window' 
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Window />
    </SnackbarProvider>
  )
}

export default App
