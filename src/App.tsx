
import Button from "./components/Button";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';


function App() {
  const[alertVisible, setAlertVisible] = useState(false);

  return (
        <div>
          {alertVisible && <Alert onClose={()=> setAlertVisible(false)}>Alert</Alert>}
          <Button color="react" onClick={() => setAlertVisible(true)}>button</Button>
        </div>
    );
  //JSX Javascript XML
  
}
export default App;