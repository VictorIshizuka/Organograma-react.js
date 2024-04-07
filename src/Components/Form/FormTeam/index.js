import "./FormTeam.css";
import { Inputs } from "../../../common/Form/Input";
import { Button } from "../../../common/Form/Button";
import { useState } from "react";
import axios from "axios";

export const FormTeam = ({ registerTeam }) => {
  const [nameTeam, setNameTeam] = useState();
  const [colorTeam, setColorTeam] = useState();

  const salveTeam = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/teams", {
      name: nameTeam,
      color: colorTeam,
    });
    setNameTeam("");
    setColorTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={salveTeam}>
        <h2>Preencha os dados para criar um novo time:</h2>
        <Inputs
          label="Nome"
          value={nameTeam}
          onChanged={(value) => setNameTeam(value)}
          required={true}
          type="text"
          placeholder="Nome do time"
        />
        <Inputs
          label="Cor"
          value={colorTeam}
          onChanged={(value) => setColorTeam(value)}
          required={true}
          type="color"
          placeholder="Cor do time"
        />

        <Button>Criar um novo time</Button>
      </form>
    </section>
  );
};
