import './App.css';
import Home from './pages/Home/Home';
import GlobalState from "./contexts/global/GlobalState"

function App() {
  return (
    <GlobalState>
      <Home />
    </GlobalState>
  );
}

export default App;
