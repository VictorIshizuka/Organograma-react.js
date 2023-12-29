import { useState } from "react";
import { Botao } from "./Botao";
import "./Form.css";
import { Inputs } from "./Inputs";
import { Select } from "./Select";

export const Form = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  function onSave(e) {
    e.preventDefault();
    console.log("itens enviado => ", nome, cargo, imagem, time);
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <Inputs
          label="Nome"
          value={nome}
          onChanged={value => setNome(value)}
          required={true}
          type="text"
          placeholder="nome"
        />
        <Inputs
          label="Cargo"
          value={cargo}
          onChanged={value => setCargo(value)}
          required={true}
          type="text"
          placeholder="cargo"
        />
        <Inputs
          label="Imagem"
          value={imagem}
          onChanged={value => setImagem(value)}
          required={true}
          type="text"
          placeholder="imagem"
        />
        <Select
          label="Time"
          value={time}
          onChanged={value => setTime(value)}
          required={true}
          itens={times}
        />
        <Botao>Enviar card</Botao>
      </form>
    </section>
  );
};
