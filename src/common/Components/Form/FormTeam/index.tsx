import "./FormTeam.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import { Input } from "../Input";
import { Button } from "../Button";
import { ITeamRegister } from "../../Team";

interface IForm {
  registerTeam: (e: ITeamRegister) => void;
}

export const FormTeam = ({ registerTeam }: IForm) => {
  const [name, setNameTeam] = useState<string>();
  const [colorTeam, setColorTeam] = useState<string>();

  const salveTeam = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    registerTeam({
      id: uuidv4(),
      name: name,
      color: colorTeam,
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
