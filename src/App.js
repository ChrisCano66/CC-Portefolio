// STYLES
import './styles/App.css';
// PAGES
import HomePage from './pages/HomePage';
// COMPONENT
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      
      <div>
        <Header />
      </div>
      
      <div className="main-content">
        <div className="content">
          <HomePage/>
        </div>
      </div>
      
      <footer className="footer">
        <p>@2021</p>
        <p>Christophe Canovas</p>
      </footer>

    </div>
  );
}

export default App;
