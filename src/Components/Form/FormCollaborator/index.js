import { useState } from "react";
import { Button } from "../../../common/Form/Button";
import "./Form.css";
import { Inputs } from "../../../common/Form/Input";
import { Select } from "../Select";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const Form = ({ teams }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  function onSave(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/collaborators", {
      id: uuidv4(),
      name,
      role,
      image,
      team,
      favorite: false,
    });
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
          onChanged={(value) => setName(value)}
          required={true}
          type="text"
          placeholder="Nome"
        />
        <Inputs
          label="Cargo"
          value={role}
          onChanged={(value) => setRole(value)}
          required={true}
          type="text"
          placeholder="Cargo"
        />
        <Inputs
          label="Imagem"
          value={image}
          onChanged={(value) => setImage(value)}
          required={true}
          type="text"
          placeholder="Imagem"
        />
        <Select
          label="Time"
          value={team}
          onChanged={(value) => setTeam(value)}
          required={true}
          itens={teams}
        />
        <Button>Enviar card</Button>
      </form>
    </section>
  );
};
