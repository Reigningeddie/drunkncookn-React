import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Title from './components/Title'
import Navbar from './components/Navbar'
import Synopsis from './components/Synopsis'
import Characters from './components/Characters'
import Menu from './components/Menu'


function App() {
  const [animate, setAnimate] = useState(false)


  return (
    <Router>
    <Navbar changeAnimate={animate => setAnimate(animate)}/>
    <Title animateUp={animate}/>
    <Switch>
      <Route path="/synopsis">
        <Synopsis />
      </Route>
      <Route path="/characters">
        <Characters />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
    </Switch>
    </Router>
  )
}

export default App;
