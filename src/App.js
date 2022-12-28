import React from 'react';
import Container from './components/Container'; // Container Component
import './App.scss' // Route styles in sass
//We return the function named "App".
function App() {
  return ( //We export the component "Container" through a div
    <div className="App">
      <Container />
    </div>
  );
}
//Exportamos la función
export default App;