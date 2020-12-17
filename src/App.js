import './App.css';
import Navbar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import ItemCount from './Components/ItemCount'
function App() {
  return (
    <div>
<Navbar/>
<ItemListContainer greeting="Bienvenido!!"/>
<ItemCount stock={5} initial={1}/>
    </div>
  );
}

export default App;
