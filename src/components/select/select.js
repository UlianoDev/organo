import "./select.css";

const Select = (props) => {
  console.log(props.itens);
  return (
    <div className="select">
      <label>{props.label}</label>
      <select required={props.mandatory}>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
