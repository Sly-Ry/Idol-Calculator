import { useState } from 'react';
import './home.css';

function Home() {

  const [expression, setExpression] = useState('');

  const ops = ['/', '*', '+', '-', '.'];

  const number = (e) => {
    const number = e.target.textContent;
      
    if(expression === "0") {
      setExpression(number);
    }
    else {
      setExpression(expression + number);
    }
  };

  const operator = (e) => {
    let operator = '';

    if(e.target.textContent === 'x'){
      operator = '*'
    }
    else {
      operator = e.target.textContent;
    }
   
    if(
      ops.includes(operator) && expression === '' ||
      ops.includes(operator) && ops.includes(expression.slice(-1))
    ) {
      return;
    }

    setExpression(expression + operator);
  };

  const calculate = () => {
    setExpression(eval(expression).toString());
  };

  const allClear = () => {
    setExpression('0');
  }

  const clear = () => {

    setExpression(prev => 
      prev
        .split('')
        .slice(0, prev.length - 1)
        .join('')
    );
  }


  return (
    <div className="App d-grid">
      {/* <img className='bg-img' alt="themed-equal-signs"></img> */}
      <div 
        className='
          calculator
          mx-auto 
          my-auto 
          w-100 
          p-2 
          d-grid
          shadow-lg
        ' 
        style={{maxWidth: "370px"}}>
        <input 
          type="text" 
          name="" 
          id=""
          placeholder="0" 
          className='
            form-control
            form-control-lg
            bg-dark
            fs-1 
            text-end
            border-0
            rounded
            shadow-none
          '
          style={{opacity: "1"}} 
          value={expression}
          required
          disabled
        ></input>
        <div className='bar'></div>
        <div className='row row-cols-4 g-2 mt-2 p-3 pt-2'>
          <div className='col'>
            <button onClick={clear} className='btn w-100 shadow-lg cac'>C</button>
          </div>
          <div className='col-6'>
            <button onClick={allClear} className='btn w-100 shadow-lg cac'>AC</button>
          </div>
          <div className='col'>
            <button onClick={operator} className='btn w-100 shadow-lg wa'>/</button>
          </div>
          <div className='col'>
            <button onClick={number} className='btn w-100 shadow-lg'>7</button>
          </div>
          <div className='col'>
            <button onClick={number} className='btn w-100 shadow-lg'>8</button>
          </div>
          <div className='col'>
            <button onClick={number} className='btn w-100 shadow-lg '>9</button>
          </div>
          <div className='col'>
            <button onClick={operator} className='btn w-100 shadow-lg wa'>x</button>
          </div>
          <div className='col'>
            <button onClick={number} className='btn w-100 shadow-lg'>4</button>
          </div>
          <div className='col'>
            <button onClick={number} className='btn w-100 shadow-lg'>5</button>
          </div>
          <div className='col'>
            <button onClick={number} className='btn w-100 shadow-lg'>6</button>
          </div>
          <div className='col'>
            <button onClick={operator} className='btn w-100 shadow-lg wa'>-</button>
          </div>
          <div className='col'>
            <button onClick={number} className='btn w-100 shadow-lg'>1</button>
          </div>
          <div className='col'>
            <button onClick={number} className='btn w-100 shadow-lg'>2</button>
          </div>
          <div className='col'>
            <button onClick={number} className='btn w-100 shadow-lg'>3</button>
          </div>
          <div className='col'>
            <button onClick={operator} className='btn w-100 shadow-lg wa'>+</button>
          </div>
          <div className='col'>
            <button onClick={operator} className='btn w-100 shadow-lg cac'>.</button>
          </div>
          <div className='col'>
            <button onClick={number} className='btn w-100 shadow-lg'>0</button>
          </div>
          <div className='col-6'>
            <button onClick={calculate} className='btn w-100 shadow-lg equals'>=
              {/* <img width="50" height="60" alt="themed-equal-signs"></img> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
