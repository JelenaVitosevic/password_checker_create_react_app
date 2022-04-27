import React from 'react';
import './SubmitPassword.css';

function SubmitForm({function1, inputValue, function2}) {

  return (
    <div className='input_container'>
        <input id='input' type="text" placeholder='insert password' onChange={function1} value={inputValue}/>
        <button id='button' onClick={function2}>Click</button>
    </div>
  )
}

export default SubmitForm;