import "./form.css";
import TextSpot from "../textSpot/textSpot";
import Select from "../select/select";
import Button from "../button/button";
import { useState } from "react";
const Form = () => {
  const option = [
    "Normal",
    "Agua",
    "Fogo",
    "Planta",
    "Inseto",
    "Toxico",
    "Eletrico",
  ];
  // const [nome, setNome] = useState("");
  // const [cargo, setCargo] = useState("");
  // const [imagem, setImagem] = useState("");

  const whenSaved = (event) => {
    event.preventDefault();
    console.log("form foi submetido");
  };
  return (
    <section className="form">
      <form onSubmit={whenSaved}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextSpot
          // valuee={nome}
          mandatory={true}
          label="Nome"
          placeholder="Digite seu nome"
          // whenAltered={(valuee) => setNome(valuee)}
        />

        <TextSpot
          // valuee={cargo}
          mandatory={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          // whenAltered={(valuee) => setCargo(valuee)}
        />

        <TextSpot
          // valuee={imagem}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          // whenAltered={(valuee) => setImagem(valuee)}
        />

        <Select mandatory={true} label="Times" itens={option} />
        <Button text="Criar card" />
      </form>
    </section>
  );
};

export default Form;
