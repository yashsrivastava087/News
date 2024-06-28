import { useState } from "react"
import Article from "./Components/Article"
import Navbar from "./Components/Navbar"


const App = () => {
  const [option, setoption] =useState('general');
  return (
    
    <div>
      <Navbar setoption= {setoption}/>
      <Article option={option}/>
    </div>
  )
}

export default App
