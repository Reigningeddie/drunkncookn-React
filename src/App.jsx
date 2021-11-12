import { useState } from 'react'
import Title from './components/Title'
import Navbar from './components/Navbar'
import Synopsis from './components/Synopsis'


function App() {
  const [toggle, setToggle] = useState(false)


  return (
    <>
    <Navbar changeToggle={toggle => setToggle(toggle)}/>
    <Title animateUp={toggle}/>
    <Synopsis />
    </>
  )
}

export default App;
