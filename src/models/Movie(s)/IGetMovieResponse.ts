import { IGenre } from "../Genre/IGenre";

export interface IGetMovieResponse {
  id: number;
  title: string;
  poster_path: string;
  overwiew: string;
  release_date: Date;
  vote_average: number;
  genres: IGenre[];
}
