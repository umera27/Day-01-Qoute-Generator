import qoutes from  "./qoutes.js"
import {useState } from "react";
import Qoute from "./components/Qoute.jsx";

function App() {
const [count,setCount]=useState(0)


function handleClick(){
  if(count<(qoutes.length-1)){
     setCount(count+1) 
  }
  else{
    setCount(0)  
  }
  
}
  return (
    <div className="container">
      <div className="qoute-container">
              <div className="header">
                <h1>Qoute Generator</h1>
              </div>
              <div className="main">
                 <div className="qoute-display">
                  <Qoute id={qoutes[count].id}  title={qoutes[count].title} author={qoutes[count].author}/>
                 
                 </div>
                 <button className="btn" onClick={handleClick}>Generate Qoute</button>
              </div>
      </div>
    </div>)
}

export default App;