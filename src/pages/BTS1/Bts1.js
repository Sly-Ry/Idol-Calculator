import { useState } from 'react';
import './bts1.css';

export function Bts1() {

  document.documentElement.style.setProperty('--bg-top', 'rgb(124, 77, 255)');
  document.documentElement.style.setProperty('--bg-bottom', 'rgb(204, 156, 172)');
  document.documentElement.style.setProperty('--outputColor', 'rgb(228, 139, 174)');
  document.documentElement.style.setProperty('--barColor', 'rgb(149, 117, 205)');
  document.documentElement.style.setProperty('--calculatorColor', 'rgba(17, 0, 80, 0.55)');
  document.documentElement.style.setProperty('--screenColor', 'rgba(0, 0, 0, 0.76)');
  document.documentElement.style.setProperty('--numberColor', 'rgba(255, 255, 255, 0.623)');
  document.documentElement.style.setProperty('--btn-color', 'rgba(228, 139, 175)');
  document.documentElement.style.setProperty('--equationColor', 'rgba(0, 0, 0, 0.55)');
  document.documentElement.style.setProperty('--cacColor', 'rgba(209, 196, 233, 0.418)');
  document.documentElement.style.setProperty('--cacHoverColor', 'rgb(209, 196, 233)');
  document.documentElement.style.setProperty('--trigColorAct', 'rgb(255, 208, 122)');
  document.documentElement.style.setProperty('--trigColorInact', 'rgba(255, 255, 255, 0.514)');
  document.documentElement.style.setProperty('--dropMenuBg', 'rgba(90, 76, 139, 0.986)');
  document.documentElement.style.setProperty('--scrollColor', 'rgba(255, 255, 255, 0.432)');
  
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
      <img className='bg-img' src={require("../../images/Bts-logo-32027.png")} alt="themed-equal-signs"></img>
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
            <button onClick={calculate} className='btn w-100 shadow-lg equals'>
              <img width="50" height="60" src={require("../../images/Bts-logo-32027.png")} alt="themed-equal-signs"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

