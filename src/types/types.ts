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

export interface Project {
  name: string;
  id:number;
  initDate: Date;
  address: string;
  area: number;
  image?: any;
  stage: Stage;
}
