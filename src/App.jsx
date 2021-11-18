import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Title from './components/Title'
import Navbar from './components/Navbar'
import Synopsis from './components/Synopsis'
import Characters from './components/Characters'


function App() {
  const [animate, setAnimate] = useState(false)


  return (
    <Router>
    <Navbar changeAnimate={animate => setAnimate(animate)}/>
    <Title animateUp={animate}/>
    <Switch>
      <Route exact path="/title">
        <Title />
      </Route>
      <Route path="/synopsis">
        <Synopsis />
      </Route>
      <Route path="/characters">
        <Characters />
      </Route>
    </Switch>
    </Router>
  )
}

export default App;
