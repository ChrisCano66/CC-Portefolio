// REACT
import React from 'react';
import {Switch, Route} from 'react-router-dom';
// STYLES
import './styles/App.css';
// PAGES
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ExpPage from './pages/ExpPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
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
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/services">
              <ServicesPage/>
            </Route>
            <Route exact path="/about">
              <AboutPage/>
            </Route>
            <Route exact path="/skills">
              <SkillsPage/>
            </Route>
            <Route exact path="/experiences">
              <ExpPage/>
            </Route>
            <Route exact path="/projects">
              <ProjectsPage/>
            </Route>
            <Route exact path="/contact">
              <ContactPage/>
            </Route>
          </Switch>
        </div>
      </div>
      
      <Footer />

    </div>
  );
}

export default App;
