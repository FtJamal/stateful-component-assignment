
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import './index.css';


const Temperature = () => {
  const [isTemp, setTemp] = useState(33);
  return (
    <div className='body'>
    <div className='main'>
      <p>Room temperature is<b> {isTemp} </b></p>
      <br />
      <button onClick={() => setTemp(isTemp + 1)} className="plus" ><FontAwesomeIcon icon={faPlus} color="green" fontSize="35px" /></button>
      <button onClick={() => setTemp(isTemp - 1)} className="minus"><FontAwesomeIcon icon={faMinus} color="red" fontSize="35px" /></button>
    </div>
    </div>
  )
};

ReactDOM.render(<Temperature />, document.querySelector("#root"))