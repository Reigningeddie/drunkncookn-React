import { useState } from 'react'
import Title from './components/Title'
import Navbar from './components/Navbar'
import Synopsis from './components/Synopsis'
import Characters from './components/Characters'


function App() {
  const [animate, setAnimate] = useState(false)


  return (
    <>
    <Navbar changeAnimate={animate => setAnimate(animate)}/>
    <Title animateUp={animate}/>
    <Synopsis />
    <Characters />
    </>
  )
}

export default App;
