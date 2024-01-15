import { useEffect, useState } from "react";
import { Banner } from "./Components/Banner";
import { Footer } from "./Components/Footer";
import { Form } from "./Components/Form/FormCollaborator";
import { Team } from "./Components/Team";
import { v4 as uuidv4 } from "uuid";
import { FormTeam } from "./Components/Form/FormTeam";
import axios from "axios";

function App() {
  const [teams, setTeams] = useState([]);

  const [collaborators, setCollaborators] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/collaborators")
      .then((res) => res.data)
      .then((datas) => {
        setCollaborators(datas);
      });
  }, [collaborators]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/teams")
      .then((res) => res.data)
      .then((datas) => {
        setTeams(datas);
      });
  }, [teams]);

  const onNewCollaboratorAdd = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  function changeColorTeam(color, id) {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = color;
          axios.put(`http://localhost:3000/teams/${id}`, {
            id: uuidv4(),
            name: team.name,
            color: team.color,
          });
        }
        return team;
      })
    );
  }

  function onDeleteCollaborator(id) {
    axios.delete(`http://localhost:3000/collaborators/${id}`).then(() => {
      setCollaborators(
        collaborators.filter((collaborators) => collaborators.id !== id)
      );
    });
  }

  function registerTeam(newTeam) {
    setTeams([...teams, { ...newTeam }]);
  }

  function solveFavorite(id) {
    setCollaborators(
      collaborators.map((collaborator) => {
        if (collaborator.id === id) {
          let favoriteOn = (collaborator.favorite = !collaborator.favorite);
          collaborator.favorite = !collaborator.favorite;

          axios.put(`http://localhost:3000/collaborators/${id}`, {
            id: uuidv4(),
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
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        onRegisteredCollaborators={(collaborator) =>
          onNewCollaboratorAdd(collaborator)
        }
      />
      <FormTeam registerTeam={registerTeam} />
      {teams.map((team) => (
        <Team
          changeColor={changeColorTeam}
          key={team.name}
          id={team.id}
          onDelete={onDeleteCollaborator}
          nameTeam={team.name}
          color={team.color}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.name
          )}
          onFavorite={solveFavorite}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
