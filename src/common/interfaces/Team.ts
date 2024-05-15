import { ICollaborator } from "./Collaborator";

export interface ITeam {
  name: string;
  id: string;
  color: string;
  collaborators?: ICollaborator[];
  changeColor?: (e: string, id: string) => void;
  onDelete?: (e: string) => void;
  onFavorite?: (e: string) => void;
}
