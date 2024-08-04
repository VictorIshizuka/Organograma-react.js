import { createContext, useCallback, useContext, useState } from "react";

import axios from "axios";

import { ICollaborator } from "../interfaces/Collaborator";
import { ITeam } from "../interfaces/Team";

interface ChildrenProps {
  children: React.ReactNode;
}
interface IData {
  collaborators: ICollaborator[];
  teams: ITeam[];
}

type ICollaboratorFunction = IData & {
  listCollaborators: () => Promise<void>;
  listTeams: () => Promise<void>;
  createCollaborator: (collaborator: ICollaborator) => Promise<void>;
  UpdateFavoriteCollaborator: (id: string) => void;
  changeColorTeam: (color: string, id: string) => void;
  createTeams: (value: ITeam) => Promise<void>;
  deleteCollaborator: (id: string) => Promise<void>;
};

const INITIAL_STATE: IData = { collaborators: [], teams: [] };

export const CollaboratorContext = createContext(
  INITIAL_STATE as ICollaboratorFunction
);

export const ProviderCollaborator = ({ children }: ChildrenProps) => {
  const [state, setState] = useState(INITIAL_STATE);
  const url = "http://localhost:3000";

  const setStateSafety = useCallback(
    (newData: Partial<IData> | ((newData: IData) => Partial<IData>)) => {
      setState(oldData => ({
        ...oldData,
        ...(typeof newData === "function" ? newData(oldData) : newData),
      }));
    },
    [setState]
  );

  const listTeams = useCallback(async () => {
    try {
      const result = await axios.get<ITeam[]>("http://localhost:3000/teams");
      setStateSafety({ teams: result.data });
    } catch (error) {
      console.error("Erro ao listar times:", error);
    }
  }, [setStateSafety]);

  const listCollaborators = useCallback(async () => {
    const result = await axios.get("http://localhost:3000/collaborators");
    setStateSafety({ collaborators: result.data });
  }, [setStateSafety]);

  const createCollaborator = useCallback(
    async (collaborator: ICollaborator) => {
      try {
        const result = await axios.post<ICollaborator>(
          `${url}/collaborators`,
          collaborator
        );
        setStateSafety(oldState => ({
          collaborators: [...oldState.collaborators, result.data],
        }));
      } catch (error) {
        console.error("Erro ao criar colaborador:", error);
      }
    },
    [setStateSafety]
  );

  const UpdateFavoriteCollaborator = useCallback(
    async (id: string) => {
      try {
        const updatedCollaborators = state.collaborators.map(collaborator => {
          if (collaborator.id === id) {
            return { ...collaborator, favorite: !collaborator.favorite };
          }
          return collaborator;
        });

        await axios.put(`${url}/collaborators/${id}`, {
          ...updatedCollaborators.find(c => c.id === id),
        });

        setStateSafety({ collaborators: updatedCollaborators });
      } catch (error) {
        console.error("Erro ao atualizar colaborador favorito:", error);
      }
    },
    [state.collaborators, setStateSafety]
  );

  const createTeams = useCallback(
    async (newTeam: ITeam) => {
      if (
        state.teams.find(
          team => team.name.toLowerCase() === newTeam.name.toLowerCase()
        )
      ) {
        alert("Time já registrado!");
        return;
      }
      const result = await axios.post(`${url}/teams`, newTeam);
      setStateSafety(oldTeam => ({
        teams: [...oldTeam.teams, result.data],
      }));
    },
    [setStateSafety, state.teams]
  );

  const changeColorTeam = useCallback(
    async (color: string, id: string) => {
      try {
        const updatedColorTeam = state.teams.map(team => {
          if (team.id === id) {
            return { ...team, color: color };
          }
          return team;
        });
        await axios.put(`${url}/teams/${id}`, {
          ...updatedColorTeam.find(c => c.id === id),
        });
        setStateSafety({ teams: updatedColorTeam });
      } catch (error) {
        console.error("Erro ao atualizar cor do time:", error);
      }
    },
    [setStateSafety, state.teams]
  );

  const deleteCollaborator = useCallback(
    async (id: string) => {
      try {
        axios.delete(`${url}/collaborators/${id}`);
        const newList = state.collaborators.filter(item => item.id !== id);
        setStateSafety({ collaborators: newList });
      } catch (error) {
        console.error("Erro ao deletar colabaorador:", error);
      }
    },
    [setStateSafety, state.collaborators]
  );

  return (
    <CollaboratorContext.Provider
      value={{
        ...state,
        listCollaborators,
        listTeams,
        createCollaborator,
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
