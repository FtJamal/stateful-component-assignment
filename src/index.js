
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import './index.css';



const Light = () => {
  const [isOn, setOff] = useState(false);
  return (
    <div className={`room ${isOn ? "true" : "false"}`}>
      <p>please turn on the light {isOn}</p>
      <br />
      <div className='button'>
        <button onClick={() => setOff(true)} className="green" >ON</button>
        <button onClick={() => setOff(false)} className="red">OFF</button>
        </div>
        <br/>
        <div>
          temperature is 33 celsius
        </div>
      </div>
    
  )
}
const Room = () => {
  const [isLit, setLit] = useState(33);
  return (
    <div>
      <p>Room temperature is {isLit}</p>
      <br />
      <button onClick={() => setLit(isLit + 1)}><FontAwesomeIcon icon={faPlus} color="green" fontSize="25px" /></button>
      <button onClick={() => setLit(isLit - 1)}><FontAwesomeIcon icon={faMinus} color="blue" fontSize="25px" /></button>
    </div>
  )
};

ReactDOM.render(
  <>
    <Light />
    <Room />
  </>, document.querySelector("#root"))