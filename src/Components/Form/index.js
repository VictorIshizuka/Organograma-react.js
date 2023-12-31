import { useState } from "react";
import { Botao } from "./Botao";
import "./Form.css";
import { Inputs } from "./Inputs";
import { Select } from "./Select";

export const Form = ({ onRegisteredCollaborators, teams }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  function onSave(e) {
    e.preventDefault();
    onRegisteredCollaborators({ name, role, image, team });
    setName("");
    setRole("");
    setImage("");
    setTeam("");
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <Inputs
          label="Nome"
          value={name}
          onChanged={value => setName(value)}
          required={true}
          type="text"
          placeholder="nome"
        />
        <Inputs
          label="Cargo"
          value={role}
          onChanged={value => setRole(value)}
          required={true}
          type="text"
          placeholder="cargo"
        />
        <Inputs
          label="Imagem"
          value={image}
          onChanged={value => setImage(value)}
          required={true}
          type="text"
          placeholder="imagem"
        />
        <Select
          label="Time"
          value={team}
          onChanged={value => setTeam(value)}
          required={true}
          itens={teams}
        />
        <Botao>Enviar card</Botao>
      </form>
    </section>
  );
};
