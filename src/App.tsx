import { v4 as uuid4 } from "uuid";

import axios from "axios";
import { useEffect, useState } from "react";
import { ITeam } from "./common/interfaces/Team";
import { Banner } from "./common/Components/Banner";
import { Footer } from "./common/Components/Footer";
import { ITeamRegister, Team } from "./common/Components/Team";
import { FormTeam } from "./common/Components/Form/FormTeam";
import { Form } from "./common/Components/Form/FormCollaborator";
import { ICollaborator } from "./common/interfaces/Collaborator";

function App() {
  const [teams, setTeams] = useState<ITeam[]>([]);

  const [collaborators, setCollaborators] = useState<ICollaborator[]>([]);

  const onNewCollaboratorAdd = (collaborator: ICollaborator) => {
    axios.post(`http://localhost:3000/collaborators`, {
      id: uuid4(),
      favorite: false,
      name: collaborator.name,
      role: collaborator.role,
      image: collaborator.image,
      team: collaborator.team,
    });
    setCollaborators([...collaborators, collaborator]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/collaborators")
      .then(res => res.data)
      .then(datas => {
        setCollaborators(datas);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/teams")
      .then(res => res.data)
      .then(datas => {
        setTeams(datas);
      });
  }, []);

  function changeColorTeam(color: string, id: string) {
    setTeams(
      teams.map(team => {
        if (team.id === id) {
          team.color = color;
          axios.put(`http://localhost:3000/teams/${id}`, {
            id: team.id,
            name: team.name,
            color: team.color,
          });
        }
        return team;
      })
    );
  }

  function onDeleteCollaborator(id: string) {
    axios.delete(`http://localhost:3000/collaborators/${id}`).then(() => {
      setCollaborators(
        collaborators.filter(collaborators => collaborators.id !== id)
      );
    });
  }

  function registerTeam(newTeam: ITeamRegister) {
    if (
      teams.find(team => team.name.toLowerCase() === newTeam.name.toLowerCase())
    ) {
      alert("Time já registrado!");
      return;
    }
    axios.post(`http://localhost:3000/teams`, {
      id: uuid4(),
      name: newTeam.name,
      color: newTeam.color,
    });
    setTeams([...teams, { ...newTeam }]);
  }

  function solveFavorite(id: string) {
    setCollaborators(
      collaborators.map(collaborator => {
        if (collaborator.id === id) {
          const favoriteOn = (collaborator.favorite = !collaborator.favorite);
          collaborator.favorite = !collaborator.favorite;
          axios.put(`http://localhost:3000/collaborators/${id}`, {
            id: collaborator.id,
            name: collaborator.name,
            role: collaborator.role,
            image: collaborator.image,
            team: collaborator.team,
            favorite: favoriteOn,
          });
        }
        return collaborator;
      })
    );
  }

  return (
    <div className="App">
      <Banner src="/images/banner.png" alt="banner do formulário" />
      <Form
        teams={teams.map((team: ITeam) => team.name)}
        onRegisteredCollaborators={(collaborator: ICollaborator) =>
          onNewCollaboratorAdd(collaborator)
        }
      />
      <FormTeam registerTeam={registerTeam} />
      {teams.map(team => (
        <Team
          changeColor={changeColorTeam}
          name={team.name}
          collaborators={collaborators.filter(
            collaborator => collaborator.team === team.name
          )}
          key={team.id}
          color={team.color}
          onDelete={onDeleteCollaborator}
          onFavorite={solveFavorite}
          id={team.id}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
