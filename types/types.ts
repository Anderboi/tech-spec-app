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

export interface IProjectCard {
  title: string;
  area: number;
  image?: any;
  stage: Stage;
}
