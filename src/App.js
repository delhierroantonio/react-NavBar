import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import CartListItem from './components/CartListItem/CartListItem';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <CartListItem/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
