import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState("white")

  return (
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-2xl">
            <button
            onClick={() =>setColor("Red")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{backgroundColor:"red"}}
            >Red</button>
            <button
            onClick={() =>setColor("Green")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{backgroundColor:"green"}}
            >Green</button>
            <button
            onClick={() =>setColor("Blue")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{backgroundColor:"blue"}}
            >Blue</button>
            <button
            onClick={() =>setColor("Yellow")}
            className="outline-none px-4 py-2 rounded-full text-black shadow-lg"
            style={{backgroundColor:"Yellow"}}
            >Yellow</button>
            <button
            onClick={() =>setColor("Orange")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{backgroundColor:"Orange"}}
            >Orange</button>
            <button
            onClick={() =>setColor("Violet")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{backgroundColor:"Violet"}}
            >Violet</button>
            <button
            onClick={() =>setColor("white")}
            className="border-2 border-black-2 px-4 py-2 rounded-full text-black shadow-lg "
            style={{backgroundColor:"white"}}
            >default</button>
          </div> 
        </div>
      </div>  
  )
}

export default App
