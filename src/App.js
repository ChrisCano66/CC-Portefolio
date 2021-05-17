// STYLES
import './styles/App.css';
// PAGES
import HomePage from './pages/HomePage';
// COMPONENT
import Header from './components/Header';
import Footer from './components/Footer';
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
      
      <Footer />

    </div>
  );
}

export default App;
