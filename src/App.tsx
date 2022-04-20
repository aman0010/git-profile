import React from 'react';
import './App.css';

import Home from './components/Home';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Home />
      </UserProvider>
    </div>
  );
}

export default App;
