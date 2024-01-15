import { useEffect, useState } from "react";
import { Banner } from "./Components/Banner";
import { Footer } from "./Components/Footer";
import { Form } from "./Components/Form/FormCollaborator";
import { Team } from "./Components/Team";
import { v4 as uuidv4 } from "uuid";
import { FormTeam } from "./Components/Form/FormTeam";
import axios from "axios";

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#57C278",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      id: uuidv4(),
      name: "Data Sciense",
      color: "#A6D157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#D86EBF",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FEBA05",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  useEffect(()=> {
   axios.get('http://localhost:3000/collaborators')
    .then(res => res.data)
    .then(datas => {
      setCollaborators(datas)
    })
  },[collaborators])


  const onNewCollaboratorAdd = collaborator => {
    setCollaborators([...collaborators, collaborator]);
  };

  function changeColorTeam(color, id) {
    setTeams(
      teams.map(team => {
        if (team.id === id) {
          team.color = color;
        }
        return team;
      })
    );
  }


  function onDeleteCollaborator(id) {
    axios.delete(`http://localhost:3000/collaborators/${id}`)
    .then(() => {
      setCollaborators(
        collaborators.filter(collaborators => collaborators.id !== id)
      );
  
  })
    
    }
  
  function registerTeam(newTeam) {
    setTeams([...teams, { ...newTeam }]);

  }

  function solveFavorite(id){
      setCollaborators(collaborators.map(collaborator => {
     if(collaborator.id === id) { 
      let favoriteOn = collaborator.favorite = !collaborator.favorite
       collaborator.favorite = !collaborator.favorite
      
       axios.put(`http://localhost:3000/collaborators/${id}` , {
        id: uuidv4(),
        name: collaborator.name,
        role: collaborator.role, 
        image: collaborator.image, 
        team: collaborator.team, 
        favorite:favoriteOn
      })
      }
     
       
        return collaborator;
  }))
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
      <FormTeam registerTeam={registerTeam} />
      {teams.map(team => (
        <Team
          changeColor={changeColorTeam}
          key={team.name}
          id={team.id}
          onDelete={onDeleteCollaborator}
          nameTeam={team.name}
          color={team.color}
          collaborators={collaborators.filter(
            collaborator => collaborator.team === team.name
          )}
          onFavorite={solveFavorite}
          
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
