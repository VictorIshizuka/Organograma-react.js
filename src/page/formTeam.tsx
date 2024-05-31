import "../page/style/FormTeam.css";
import { v4 as uuid4 } from "uuid";
import { useState } from "react";
import { useCollaborators } from "../common/context/useContextCollaborator";
import { Input } from "../common/Components/Form/Input";
import { Button } from "../common/Components/Form/Button";

export const FormTeam = () => {
  const { createTeams } = useCollaborators();
  const [name, setNameTeam] = useState<string>();
  const [colorTeam, setColorTeam] = useState<string>();

  const salveTeam = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTeams({
      id: uuid4(),
      color: colorTeam,
      name: name,
    });

    setNameTeam("");
    setColorTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={salveTeam}>
        <h2>Preencha os dados para criar um novo time:</h2>
        <Input
          label="Nome"
          value={name}
          onChange={(value: string) => setNameTeam(value)}
          required={true}
          type="text"
          placeholder="Nome do time"
        />
        <Input
          label="Cor"
          value={colorTeam}
          onChange={(value: string) => setColorTeam(value)}
          required={true}
          type="color"
          placeholder="Cor do time"
        />

        <Button>Criar um novo time</Button>
      </form>
    </section>
  );
};
