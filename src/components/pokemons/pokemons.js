import "./pokemons.css";

const Pokemons = (props) => {
  return (
    <div className="container">
      <div className="header">
        <img src={props.img} alt={props.nome}></img>
      </div>
      <div className="footer">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  );
};

export default Pokemons;
