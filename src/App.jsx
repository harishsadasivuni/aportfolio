import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './customComponents/header.jsx'
import Footer from './customComponents/Footer.jsx';
import Home from './customPages/Home.jsx';
import SkillsPage from './customPages/SkillsPage.jsx';
import Contact from './customPages/Contact.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Router>
        <Switch>
        <Route path="/contact">
            <Contact/>
          </Route>
        <Route path="/skills">
            <SkillsPage/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          
        </Switch>
      </Router>
      <Footer/> 
    </>
  )
}

export default App
