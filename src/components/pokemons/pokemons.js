import "./pokemons.css";

const Pokemons = (props) => {
  return (
    <div className="container">
      <div className="header" style={{ backgroundColor: props.cardColor }}>
        <img src={props.img} alt={props.name}></img>
      </div>
      <div className="footer">
        <h4>{props.name}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  );
};

export default Pokemons;
