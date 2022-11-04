import { IGenre } from "../Genre/IGenre";

export interface IGetMovieResponse {
  id: number;
  title: string;
  poster_path: string;
  overwiew: string;
  release_date: string;
  vote_average: number;
  genres: IGenre[];
}
