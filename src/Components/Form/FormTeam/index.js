import "./FormTeam.css";
import { Inputs } from "../../../common/Form/Input";
import { Button } from "../../../common/Form/Button";
import { useState } from "react";

export const FormTeam = ({ registerTeam }) => {
  const [nameTeam, setNameTeam] = useState();
  const [colorTeam, setColorTeam] = useState();

  return (
    <section className="form">
      <form
        onSubmit={e => {
          e.preventDefault();
          registerTeam({ name: nameTeam, color: colorTeam });
          setNameTeam("");
          setColorTeam("");
        }}
      >
        <h2>Preencha os dados para criar um novo time:</h2>
        <Inputs
          label="Nome"
          value={nameTeam}
          onChanged={value => setNameTeam(value)}
          required={true}
          type="text"
          placeholder="Nome do time"
        />
        <Inputs
          label="Cor"
          value={colorTeam}
          onChanged={value => setColorTeam(value)}
          required={true}
          type="color"
          placeholder="Cor do time"
        />

        <Button>Criar um novo time</Button>
      </form>
    </section>
  );
};
