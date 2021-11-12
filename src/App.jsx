import Title from './components/Title';
import Navbar from './components/Navbar';
import { useState } from 'react';


function App() {
  const [toggle, setToggle] = useState(false)


  return (
    <>
    <Navbar changeToggle={toggle => setToggle(toggle)}/>
    <Title animateUp={toggle}/>
    </>
  )
}

export default App;
