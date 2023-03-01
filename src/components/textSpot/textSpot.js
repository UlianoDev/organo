import { useState } from "react";
import "./textSpot.css";

const TextSpot = (props) => {
  //   const onTyped = (event) => {
  //     props.whenAltered(event.target.value);
  //   };
  const [valor, setValor] = useState("");
  const onTyped = (event) => {
    setValor(event.target.value);
    console.log(valor);
  };
  return (
    <div className="text-spot">
      <label>{props.label}</label>
      <input
        // value={props.valuee}
        onChange={onTyped}
        required={props.mandatory}
        placeholder={props.placeholder}
        value={valor}
      />
    </div>
  );
};

export default TextSpot;
