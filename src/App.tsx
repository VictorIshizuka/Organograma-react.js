import { Banner } from "./common/Components/Banner";
import { Footer } from "./common/Components/Footer";
import { FormCollaborator } from "./page/formCollaborator";

import { Team } from "./common/Components/Team";
import { FormTeam } from "./page/formTeam";
import { useCollaborators } from "./common/context/useContextCollaborator";

function App() {
  const { teams, collaborators } = useCollaborators();
  return (
    <div className="App">
      <Banner src="/images/banner.png" alt="banner do formulário" />
      <FormCollaborator />
      <FormTeam />
      {teams.map(team => (
        <Team
          name={team.name}
          key={team.id}
          color={team.color}
          id={team.id}
          collaborators_s={collaborators.filter(
            collaborator => collaborator.team === team.name
          )}
        />
      ))}
      <Footer src="./images/logo.png" alt="" />
    </div>
  );
}

export default App;
