import "./form.css";
import TextSpot from "../textSpot/textSpot";
import Select from "../select/select";
import Button from "../button/button";
import { useState } from "react";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const whenSaved = (event) => {
    event.preventDefault();
    props.newCard({ nome: nome, cargo: cargo, imagem: imagem, time: time });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };
  return (
    <section className="form">
      <form onSubmit={whenSaved}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextSpot
          mandatory={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={nome}
          setter={setNome}
        />

        <TextSpot
          mandatory={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          setter={setCargo}
        />

        <TextSpot
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          setter={setImagem}
        />

        <Select
          mandatory={true}
          label="Times"
          itens={props.itens}
          value={time}
          setter={setTime}
        />
        <Button text="Criar card" />
      </form>
    </section>
  );
};

export default Form;
