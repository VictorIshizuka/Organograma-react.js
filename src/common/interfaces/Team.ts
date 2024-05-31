import { ICollaborator } from "./Collaborator";

export interface ITeam {
  name: string;
  id: string;
  color: string;
  collaborators?: ICollaborator[];
}
