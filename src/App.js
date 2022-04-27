import SubmitForm from "./components/submitForm/SubmitForm";
import Table from "./components/table/Table";
import { useState } from "react";
import './style.css';

function App() {
  const [passwordValue, setPasswordValue] = useState('');
  const [sums, setSums] = useState();

  const getPassword = (e) => setPasswordValue(e.target.value);
 
  const handleClickFetch = async () => {
    const dataToSend = {
        password: passwordValue
    }
    const checkPassword = await fetch('http://localhost:5000/passwordChecker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    });
    const content = await checkPassword.json();

    setSums(content);
    console.log(sums)
  }

  return (
    <div className="container">
      <h1 className="content_title">PASSWORD STRENGTH CHECKER</h1>
      <SubmitForm function1={getPassword} inputValue={passwordValue} function2={handleClickFetch}/>
      <Table answer={sums}/>
    </div>
  );
}

export default App;
