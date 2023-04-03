import { useState } from 'react'
import { HashRouter, HashRouter as Route, Switch } from 'react-router-dom'
import Title from './components/Title'
import Navbar from './components/Navbar'
import Synopsis from './components/Synopsis'
import Characters from './components/Characters'
import Menu from './components/Menu'
import Contact from './components/Contact'


function App() {
  const [animate, setAnimate] = useState(false)


  return (
    <HashRouter>
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
      <Route path="/contacts">
        <Contact />
      </Route>
    </Switch>
    </HashRouter>
  )
}

export default App;
