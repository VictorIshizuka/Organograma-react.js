import { useState } from "react";
import { Banner } from "./Components/Banner";
import { Footer } from "./Components/Footer";
import { Form } from "./Components/Form";
import { Team } from "./Components/Team";

function App() {
  const teams = [
    {
      name: "Programação",
      colorPrimary: "#57C278",
      colorSecondary: "#D9F7E9",
    },
    {
      name: "Front-End",
      colorPrimary: "#82CFFA",
      colorSecondary: "#E8F8FF",
    },
    {
      name: "Data Sciense",
      colorPrimary: "#A6D157",
      colorSecondary: "#F0F8E2",
    },
    {
      name: "Devops",
      colorPrimary: "#E06B69",
      colorSecondary: "#FDE7E8",
    },
    {
      name: "UX e Design",
      colorPrimary: "#D86EBF",
      colorSecondary: "#FAE5F5",
    },
    {
      name: "Mobile",
      colorPrimary: "#FEBA05",
      colorSecondary: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      colorPrimary: "#FF8A29",
      colorSecondary: "#FFEEDF",
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const onNewCollaboratorAdd = collaborator => {
    setCollaborators([...collaborators, collaborator]);
  };

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
          key={team.name}
          nameTeam={team.name}
          colorPrimary={team.colorPrimary}
          colorSecondary={team.colorSecondary}
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
