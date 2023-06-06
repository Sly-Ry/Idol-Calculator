
import './App.css';

function App() {

  return (
    <div className="App d-grid">
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
          placeholder="evaluate" 
          className='
            fs-1 
            text-end
            border-0
            shadow-none
          ' 
          value="0"
          required
          disabled
        ></input>
        <div className='bar'></div>
        <div className='row row-cols-4 g-2 mt-2 p-3 pt-2'>
          <div className='col'>
            <button className='btn w-100 shadow-lg cac'>C</button>
          </div>
          <div className='col-6'>
            <button className='btn w-100 shadow-lg cac'>AC</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-lg wa'>/</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-lg'>7</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-lg'>8</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-lg '>9</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-lg wa'>x</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-lg'>4</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-lg'>5</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-lg'>6</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-lg wa'>-</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-lg'>1</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-lg'>2</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-lg'>3</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-lg wa'>+</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-lg cac'>.</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-lg'>0</button>
          </div>
          <div className='col-6'>
            <button className='btn w-100 shadow-lg equals'>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
