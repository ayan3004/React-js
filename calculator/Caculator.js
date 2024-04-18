import React, { useState } from 'react'

export default function Caculator() {

  const [btn, setBtn] = React.useState('');
  const [value, setValue] = useState('');

  const calculateval = (button) => {

    if (button === '=') {

      try {
        setValue(eval(value));
      }
      catch (e) {
        console.log(e);
      }

    }

    else if(button === '%'){

      setValue(value/100)

    }

    else if (button === 'AC') {
      setValue('')
      setBtn('');
    }

    else if (button === 'Del') {
      setValue(value.slice(0, -1));
    }

    else {
      setValue(value + button);
    }

  }


  return (

    <>

      <div className="main">

        <h1>Calculate </h1>

        <div className="calculator">

          <input type="text" placeholder="Calcuate Values" value={value} readOnly/>

          <div className="btns">

            <div>
              <button onClick={() => calculateval('AC')}>AC</button>
              <button onClick={() => calculateval('%')}>%</button>
              <button onClick={(del) => calculateval('Del')}>Del</button>
              <button onClick={() => calculateval('/')}>/</button>
            </div>

            <div>
              <button onClick={() => calculateval('7')}>7</button>
              <button onClick={() => calculateval('8')}>8</button>
              <button onClick={() => calculateval('9')}>9</button>
              <button onClick={() => calculateval('*')}>*</button>
            </div>

            <div>
              <button onClick={() => calculateval('4')}>4</button>
              <button onClick={() => calculateval('5')}>5</button>
              <button onClick={() => calculateval('6')}>6</button>
              <button onClick={() => calculateval('-')}>-</button>
            </div>

            <div>
              <button onClick={() => calculateval('1')}>1</button>
              <button onClick={() => calculateval('2')}>2</button>
              <button onClick={() => calculateval('3')}>3</button>
              <button onClick={() => calculateval('+')}>+</button>
            </div>

            <div>
              <button onClick={() => calculateval('00')}>00</button>
              <button onClick={() => calculateval('0')}>0</button>
              <button onClick={() => calculateval('.')}>.</button>
              <button onClick={() => calculateval('=')}>=</button>
            </div>

          </div>


        </div>

      </div>

    </>
  )
}