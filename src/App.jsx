import "./App.css";
import "./Button.css";
import "./Clearbutton.css";
import "./Input.css";
import Button from "./components/Button";
import Clearbutton from "./components/Clearbutton";
import Input from "./components/Input";

import { useState } from "react";

function App() {
  let nextnum = false;
  let operate = null;
  let segNum = false;

  const [resultat, setResultat] = useState(0);
  const [resultat2, setResultat2] = useState(0);
  const [resultat3, setResultat3] = useState(0);

  const posarInput = (input) => {
    if (!nextnum) {
      setResultat(input);
    } else {
      operar(input);
    }
  };

  const seguentNum = (input) => {
    /* if (!segNum) {
      setResultat(resultat * 10 + input);
    } else {
      operar(input);
    } */
    if (nextnum) {
      setResultat(resultat * 10 + input);
    } /*  else {
      setResultat(resultat * 10 + input);
    } */
  };

  const sumar = () => {
    nextnum = true;
    operate = "+";
  };

  const restar = () => {
    nextnum = true;
    operate = "-";
  };

  const igual = () => {};

  const operar = (input) => {
    nextnum = false;

    if (operate === "+") {
      return posarInput(resultat + input);
    } else {
      return posarInput(resultat - input);
    }
  };

  const clear = () => {
    nextnum = false;
    setResultat(0);
  };

  return (
    <div className="App">
      <br />

      <div className="calculadora">
        <br />
        <Input text={resultat} text1={resultat2} />

        <br />
        <div className="btn_numeros">
          <br />
          <Button value={7} funcioClicar={posarInput} />
          <Button value={8} funcioClicar={posarInput} />
          <Button value={9} funcioClicar={posarInput} />
          <Button value={4} funcioClicar={posarInput} />
          <Button value={5} funcioClicar={posarInput} />
          <Button value={6} funcioClicar={posarInput} />
          <Button value={1} funcioClicar={posarInput} />
          <Button value={2} funcioClicar={posarInput} />
          <Button value={3} funcioClicar={posarInput} />
          <Button
            className="operacions "
            value={"0"}
            funcioClicar={posarInput}
          />
          <br />
          <br />
          <div className="operator">
            <Button className="operacions " value={"+"} funcioClicar={sumar} />
            <Button className="operacions" value={"-"} funcioClicar={restar} />
            <Button className="operacions" value={"="} funcioClicar={sumar} />
          </div>
          <br />
          <Clearbutton funcioClicar={clear} />
        </div>
      </div>
    </div>
  );
}

export default App;
