import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import {Header} from './Components/Header'
import {Menu} from './Components/Menu'
import {TypesExample} from './Components/Botao'
import "./Components/menu.css";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  // const [count, setCount] = useState(0)

  // let link : string = 'https://www.google.com';

  return (
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>



    // <div>Leandro Luis da Silva</div>

    // <a href={link}> google</a>

    <div>
       <Header title='Home' /> 
       <Menu/> 
       Olá mundo
       <TypesExample />
       </div>

  )
}

export default App
