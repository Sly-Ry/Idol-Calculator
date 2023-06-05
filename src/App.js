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
            rounded
            shadow-none
          ' 
          value="0"
          required
          disabled
        ></input>
        <div className='bar'></div>
        <div className='row row-cols-4 g-2 mt-2 p-3 pt-2'>
          <div className='col'>
            <button className='btn w-100 shadow-none'>C</button>
          </div>
          <div className='col-6'>
            <button className='btn w-100 shadow-none'>AC</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-none'>/</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-none'>7</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-none'>8</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-none '>9</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-none'>x</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-none'>4</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-none'>5</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-none'>6</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-none'>-</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-none'>1</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-none'>2</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-none'>3</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-none'>+</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-none'>.</button>
          </div>
          <div className='col'>
            <button className='btn w-100 shadow-none'>0</button>
          </div>
          <div className='col-6'>
            <button className='btn w-100 shadow-none'>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
