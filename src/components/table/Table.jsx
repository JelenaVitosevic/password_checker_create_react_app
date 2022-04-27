import React from 'react';
import './Table.css';

function Table({answer}) {
  const textTable = ['velika slova', 'mala slova', 'brojevi', 'specijalni karakteri'];
  

  return (
    <div className='table_wrapper'>
        <table id='table'>
            <tbody>
                <tr>{textTable.map((text) => {
                    return (
                            <th key={textTable.indexOf(text)}>{text}</th>
                    )
                })}
                </tr>
                <tr>
                    {answer? Object.keys(answer).map((item, i) => {
                        return (<td key={i}>{answer[item]}</td>)
                    }) : <><td>0</td><td>0</td><td>0</td><td>0</td></>}
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table;
