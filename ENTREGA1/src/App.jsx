import './App.css'
import  './components/NavBar/NavBar'
import './components/CartWidget/CartWidget'
import './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
    
     <NavBar/> 
     <ItemListContainer greeting="Buenas profe. La tienda será de consolas de video juegos, se va a llamar Tu consola. Aquí se van a ubicar los productos en las proximas entregas:"/>
     
    </>
  );
}

export default App
