import { useState } from 'react';
import './App.css';
import React from 'react';


const App = () => {
  const [result, setResult] = useState('');

  //display values
  const display = values => {
    setResult(result.concat(values.target?.className));
  }

  //clear values
  const clear = () => {
    setResult("");
  }

  //backspace 
  const backspace = () => {
    setResult(result?.slice(0, -1));
  }

  //calcultion
  const calc = () => {
    try {
      setResult(Number(eval(result).toString()).toFixed(2));
    } catch (error) {
      setResult("Invalid");
    }
  }

  //convert dollar to rupee
  const us_to_rs = () => {
    setResult(Number(eval(result * 79).toString()).toFixed(2))
  }

  return (
    <div className="App">
      <h2>Calculator</h2>
      <div className="Container">
        <form>
          <input type="text" value={result} id="result" />
        </form>
        <div className="keypad">
          <input type="button" value='AC' onClick={clear} />
          <button id="backspace" onClick={backspace}><i class="material-icons">backspace</i></button>
          <input type="button" className='%' value="%" onClick={display} />
          <input type="button" className='/' value="&divide;" onClick={display} />
          <input type="button" className='7' value="7" onClick={display} />
          <input type="button" className='8' value="8" onClick={display} />
          <input type="button" className='9' value="9" onClick={display} />
          <input type="button" className='*' value="&times;" onClick={display} />
          <input type="button" className='4' value="4" onClick={display} />
          <input type="button" className='5' value="5" onClick={display} />
          <input type="button" className='6' value="6" onClick={display} />
          <input type="button" className='-' value="-" onClick={display} />
          <input type="button" className='1' value="1" onClick={display} />
          <input type="button" className='2' value="2" onClick={display} />
          <input type="button" className='3' value="3" onClick={display} />
          <input type="button" className='+' value="+" onClick={display} />
          <input type="button" className='.' value="." onClick={display} />
          <input type="button" className='0' value="0" onClick={display} />
          <input type="button" value=" $ => &#8377; " onClick={us_to_rs} />
          <input type="button" className='btn' id='equal' value="=" onClick={calc} />
        </div>
      </div>
    </div>
  );
}

export default App;
