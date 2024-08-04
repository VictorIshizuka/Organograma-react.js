import { useEffect, useState } from "react";

import { useCollaborators } from "./common/context/useContextCollaborator";

import { FormTeam } from "./page/formTeam";
import { FormCollaborator } from "./page/formCollaborator";

import { Banner } from "./common/Components/Banner";
import { Footer } from "./common/Components/Footer";
import { Team } from "./common/Components/Team";
import { Button } from "./common/Components/Form/Button";

function App() {
  const { teams, listTeams, collaborators, listCollaborators } =
    useCollaborators();

  const [showFormCollaborator, setShowFormCollaborator] = useState(false);
  const [showFormTeam, setShowFormTeam] = useState(false);

  useEffect(() => {
    listTeams();
  }, [listTeams]);

  useEffect(() => {
    listCollaborators();
  }, [listCollaborators]);

  return (
    <div className="App">
      <Banner src="/images/banner.png" alt="banner do formulário" />
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              setShowFormCollaborator(!showFormCollaborator);
            }}
          >
            Criar colaborador
          </Button>
          <Button
            onClick={() => {
              setShowFormTeam(!showFormTeam);
            }}
          >
            Criar time
          </Button>
        </div>
        {showFormCollaborator && <FormCollaborator />}
        {showFormTeam && <FormTeam />}
      </div>
      {teams.map((team, index) => (
        <Team
          key={index}
          team={team}
          collaborators_s={collaborators.filter(collaborator => {
            return collaborator.team === team.name;
          })}
        />
      ))}
      <Footer src="./images/logo.png" alt="" />
    </div>
  );
}

export default App;
