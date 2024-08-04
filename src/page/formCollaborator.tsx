import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useCollaborators } from "../common/context/useContextCollaborator";
import { Input } from "../common/Components/Form/Input";
import { Select } from "../common/Components/Form/Select";
import { Button } from "../common/Components/Form/Button";
import "../page/style/FormCollaborator.css";

export const FormCollaborator = () => {
  const { teams, createCollaborator } = useCollaborators();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("https://github.com/");
  const [team, setTeam] = useState("");

  function onSave(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    createCollaborator({
      id: uuidv4(),
      name,
      role,
      image,
      team,
      favorite: false,
    });
    setName("");
    setRole("");
    setImage("https://github.com/");
    setTeam("");
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <Input
          label="Nome"
          value={name}
          onChange={value => setName(value)}
          required={true}
          type="text"
          placeholder="Nome"
        />
        <Input
          label="Cargo"
          value={role}
          onChange={value => setRole(value)}
          required={true}
          type="text"
          placeholder="Cargo"
        />
        <Input
          label="Imagem Github (.png)"
          value={image}
          onChange={value => setImage(value)}
          required={true}
          type="text"
          placeholder="Imagem"
        />
        <Select
          label="Time"
          value={team}
          onChange={(value: string) => setTeam(value)}
          required={true}
          items={teams}
        />
        <Button>Enviar card</Button>
      </form>
    </section>
  );
};
