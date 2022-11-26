// export enum Stage {
//   Feasibility = "F",
//   Concept = 'C',
//   Working = 'W',
//   Post = 'P',
// }

export type Stage =
  | "Feasibility"
  | "Concept"
  | "Development"
  | "Production"
  | "Construction";

export interface IProject {
  name: string;
  id:number;
  address: string;
  area: number;
  image?: any;
  stage: Stage;
}
