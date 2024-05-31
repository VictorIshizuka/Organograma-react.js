/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { ICollaborator } from "../interfaces/Collaborator";
import axios from "axios";
import { ITeam } from "../interfaces/Team";
import { ITeamRegister } from "../Components/Team";

interface ChildrenProps {
  children: React.ReactNode;
}
interface IData {
  collaborators: ICollaborator[];
  teams: ITeam[];
}

type ICollaboratorFunction = IData & {
  createCollaborator: (collaborator: ICollaborator) => Promise<void>;
  UpdateFavoriteCollaborator: (id: string) => void;
  deleteCollaborator: (id: string) => Promise<void>;
  changeColorTeam: (color: string, id: string) => void;
  createTeams: (value: ITeamRegister) => Promise<void>;
};

const INITIAL_STATE: IData = { collaborators: [], teams: [] };

export const CollaboratorContext = createContext<ICollaboratorFunction>(
  INITIAL_STATE as unknown as ICollaboratorFunction
);

export const ProviderCollaborator = ({ children }: ChildrenProps) => {
  const [collaborators, setCollaborators] = useState<ICollaborator[]>([]);
  const [teams, setTeams] = useState<ITeam[]>([]);

  const createCollaborator = useCallback(
    async (collaborator: ICollaborator) => {
      try {
        await axios.post(`http://localhost:3000/collaborators`, {
          id: collaborator.id,
          favorite: collaborator.favorite,
          name: collaborator.name,
          role: collaborator.role,
          image: collaborator.image,
          team: collaborator.team,
        });
        //   setCollaborators([...collaborators, collaborator]);
      } catch {
        console.log("Erro ao criar o Colaborador");
      }
    },
    []
  );

  const UpdateFavoriteCollaborator = useCallback(
    (id: string) => {
      setCollaborators(
        collaborators.map(collaborator => {
          if (collaborator.id === id) {
            const favoriteOn = (collaborator.favorite = !collaborator.favorite);
            collaborator.favorite = !collaborator.favorite;
            axios.put(`http://localhost:3000/collaborators/${id}`, {
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
    },
    [collaborators]
  );

  const deleteCollaborator = useCallback(async (id: string) => {
    await axios.delete(`http://localhost:3000/collaborators/${id}`).then(() => {
      setCollaborators(
        collaborators.filter(collaborators => collaborators.id !== id)
      );
    });
  }, []);

  const createTeams = useCallback(async (newTeam: ITeamRegister) => {
    if (
      teams.find(team => team.name.toLowerCase() === newTeam.name.toLowerCase())
    ) {
      alert("Time já registrado!");
      return;
    }
    await axios.post(`http://localhost:3000/teams`, {
      id: newTeam.id,
      name: newTeam.name,
      color: newTeam.color,
    });
    setTeams([...teams, { ...newTeam }]);
  }, []);

  const changeColorTeam = useCallback(
    async (color: string, id: string) => {
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
    },
    [teams]
  );

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/collaborators")
        .then(res => res.data)
        .then(data => {
          setCollaborators(data);
        });
    } catch (erro) {
      console.log("erro ao lista colaboradores " + erro);
    }
  }, [createCollaborator, deleteCollaborator]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/teams")
        .then(res => res.data)
        .then(data => setTeams(data));
    } catch (erro) {
      console.log("erro ao listar times " + erro);
    }
  }, []);

  return (
    <CollaboratorContext.Provider
      value={{
        createCollaborator,
        teams,
        collaborators,
        UpdateFavoriteCollaborator,
        deleteCollaborator,
        changeColorTeam,
        createTeams,
      }}
    >
      {children}
    </CollaboratorContext.Provider>
  );
};

export function useCollaborators() {
  return useContext(CollaboratorContext);
}
