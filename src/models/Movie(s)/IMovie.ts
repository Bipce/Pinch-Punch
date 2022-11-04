import { IGenre } from "../Genre/IGenre";

export interface IMovie {
  id: number;
  title?: string;
  poster_path: string;
  genre_ids?: number[];
  video?: boolean;
  overview?: string;
  release_date?: string;
  vote_average?: number;
  production_companies?: [];
  genres: IGenre[];
}
