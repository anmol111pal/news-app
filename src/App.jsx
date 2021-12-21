import Navbar from './Navbar'
import About from './About'
import News from './News'
import {Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <Switch>
      
      <Route exact path="/" >
        <Navbar />
        <News />
      </Route>
      <Route exact path="/news/entartainment" >
        <Navbar />
        <News />
      </Route>
      <Route exact path="/news/business" >
        <Navbar />
        <News />
      </Route>
      <Route exact path="/news/tech" >
        <Navbar />
        <News />
      </Route>
      <Route exact path="/news/covid-19" >
        <Navbar />
        <News />
      </Route>
      <Route exact path="/about" >
        <Navbar />
        <About />
      </Route>
      <Redirect to="/news" />
    </Switch>
  );
}

export default App;
