// STYLES
import './styles/App.css';
// PAGES
import HomePage from './pages/HomePage';
// COMPONENT
import Header from './components/Header';
import Particules from './components/Particules';


function App() {
  return (
    <div className="App">
      
      <Particules/>

      <div>
        <Header />
      </div>
      
      <div className="main-content">
        <div className="content">
          <HomePage/>
        </div>
      </div>
      
      <footer className="footer">
        <p>Copyright@2021, Christophe Canovas.</p>
        <p>" Apprendre et Concevoir autrement ! "</p>
      </footer>

    </div>
  );
}

export default App;
