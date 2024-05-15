export interface ICollaborator {
  id: string;
  image: string;
  name: string;
  role: string;
  color?: string;
  favorite?: boolean;
  team: string;
}
export interface ICollaboratorFunction {
  image: string;
  name: string;
  role: string;
  backgroundColor?: string;
  onDelete: (e: string) => void;
  onFavorite: (e: string) => void;
  collaborator: ICollaborator;
}
