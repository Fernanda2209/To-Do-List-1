import React from 'react';
import Container from './components/Container'; //Componenete Container
import './App.scss' // Estilos en sass
//Regresamos la función de nombre "App"
function App() {
  return ( //div contenedor del componenete "Container"
    <div className="App">
      <Container />
    </div>
  );
}
//Exportamos la función
export default App;