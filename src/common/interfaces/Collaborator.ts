export interface ICollaborator {
  id: string;
  image: string;
  name: string;
  role: string;
  favorite?: boolean;
  team: string;
}
export interface ICollaboratorFunction {
  image: string;
  name: string;
  role: string;
  backgroundColor: string;
  collaborator: ICollaborator;
}
