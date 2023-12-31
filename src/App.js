import { useState } from "react";
import { Banner } from "./Components/Banner";
import { Footer } from "./Components/Footer";
import { Form } from "./Components/Form";
import { Team } from "./Components/Team";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      colorPrimary: "#57C278",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      colorPrimary: "#82CFFA",
    },
    {
      id: uuidv4(),
      name: "Data Sciense",
      colorPrimary: "#A6D157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      colorPrimary: "#E06B69",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      colorPrimary: "#D86EBF",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      colorPrimary: "#FEBA05",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      colorPrimary: "#FF8A29",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const onNewCollaboratorAdd = collaborator => {
    setCollaborators([...collaborators, collaborator]);
  };

  function changeColorTeam(color, id) {
    setTeams(
      teams.map(team => {
        if (team.id === id) {
          team.colorPrimary = color;
        }
        return team;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map(team => team.name)}
        onRegisteredCollaborators={collaborator =>
          onNewCollaboratorAdd(collaborator)
        }
      />
      {teams.map(team => (
        <Team
          changeColor={changeColorTeam}
          key={team.name}
          id={team.id}
          nameTeam={team.name}
          colorPrimary={team.colorPrimary}
          collaborators={collaborators.filter(
            collaborator => collaborator.team === team.name
          )}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
