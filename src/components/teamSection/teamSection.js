import Pokemons from "../pokemons/pokemons";
import "./teamSection.css";

const Team = (props) => {
  return (
    props.pokemon.length > 0 && (
      <section
        className="teamBlock"
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.title}</h3>
        <div className="pokemons">
          {props.pokemon.map((parameter) => (
            <Pokemons
              nome={parameter.nome}
              cargo={parameter.cargo}
              img={parameter.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
