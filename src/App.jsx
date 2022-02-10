import "./App.css";
import "./Button.css";
import "./Clearbutton.css";
import "./Input.css";
import Button from "./components/Button";
import Clearbutton from "./components/Clearbutton";
import Input from "./components/Input";
 
import { useState } from "react";
 
function App() {
  const [operacion, setOperacion] = useState(null); // Operación = + - * /
  const [valor, setValor] = useState(0); // Primer Valor
  const [valor2, setValor2] = useState(0); // Segundo Valor
  const [inputs, setInputs] = useState(""); // Todos los valores ingresados
  const [segundaParte, setSegundaParte] = useState(false); // Si esta en la segunda parte
  const [resultado, setResultado] = useState(0); // Resultado de los dos valores ingresados
 
  const posarInput = (input) => {
    // Comprueba si esta en la primera parte o segunda
    /* 
      1. Si esta en la primera parte
      Agregara el valor a la primera parte
      2. Si esta en la segunda parte
      Agregara el valor a la segunda parte
    */
    if (!segundaParte) {
      setValor(valor * 10 + input);
      setInputs(inputs + input);
    } else {
      setValor2(valor2 * 10 + input);
      setInputs(inputs + input);
    }
  };
 
  const sumar = () => {
    // Define que esta en la segunda parte y la operación es +
    setSegundaParte(true);
    setInputs(valor + "+");
    setOperacion("+");
  };
 
  const restar = () => {
    // Define que esta en la segunda parte y la operación es -
    setSegundaParte(true);
    setInputs(valor + "-");
    setOperacion("-");
  };
 
  const igual = () => {
    /*
      1. Si la operación es +
      Suma los dos valores
      2. Si la operación es -
      Resta los dos valores
    */
    if (operacion === "+") {
      setResultado(valor + valor2);
    } else if (operacion === "-") {
      setResultado(valor - valor2);
    }
    // Establece nuevamente para que puedas escribir la primera parte
    setInputs("");
    setSegundaParte(false);
  };
 
  const clear = () => {
    // Limpia todos los valores
    setSegundaParte(false);
    setValor(0);
    setValor2(0);
    setInputs("");
    setResultado(0);
  };
 
  return (
    <div className="App">
      <br />
 
      <div className="calculadora">
        <br />
        <Input text={inputs} text1={resultado} />
 
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
            className="operacions"
            value={"0"}
            funcioClicar={posarInput}
          />
          <br />
          <br />
          <div className="operator">
            <Button className="operacions" value={"+"} funcioClicar={sumar} />
            <Button className="operacions" value={"-"} funcioClicar={restar} />
            <Button className="operacions" value={"="} funcioClicar={igual} />
          </div>
          <br />
          <Clearbutton funcioClicar={clear} />
        </div>
      </div>
    </div>
  );
}
 
export default App;