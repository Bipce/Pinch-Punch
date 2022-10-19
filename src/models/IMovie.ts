export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
  video?: boolean;
}
