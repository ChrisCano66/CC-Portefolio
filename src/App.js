// STYLES
import './styles/App.css';
// PAGES
import HomePage from './pages/HomePage';
// COMPONENT
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
