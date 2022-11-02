import { ICast } from "./ICast";
import { ICrew } from "./ICrew";

export interface IGetCreditsResponse {
  id: number;
  cast: ICast[];
  crew: ICrew[];
}
