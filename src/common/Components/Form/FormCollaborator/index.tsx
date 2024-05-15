import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { Select } from "../Select";
import { ICollaborator } from "../../../interfaces/Collaborator";

interface ITeams {
  teams: string[];
  onRegisteredCollaborators: (e: ICollaborator) => void;
}

export const Form = ({ teams, onRegisteredCollaborators }: ITeams) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  function onSave(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    onRegisteredCollaborators({
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
          label="Imagem"
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
          itens={teams}
        />
        <Button>Enviar card</Button>
      </form>
    </section>
  );
};
