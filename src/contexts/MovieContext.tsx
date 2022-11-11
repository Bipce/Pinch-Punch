import React, { createContext, useEffect, useRef, useState } from "react";
import { IGenre } from "../models/Genre/IGenre";
import { IMovie } from "../models/Movie(s)/IMovie";
import { getGenres, getMovies } from "../services/backend";

interface Props {
  movies: Map<IGenre, IMovie[]>;
  loadNextMovies: (genre: IGenre) => void;
}

export const MovieContext = createContext<Props>({} as Props);

export const MovieContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Map<IGenre, IMovie[]>>(new Map<IGenre, IMovie[]>());
  const pages = useRef<Map<IGenre, number>>(new Map<IGenre, number>());

  useEffect(() => {
    (async () => {
      const genres = await getGenres();
      const map = new Map<IGenre, IMovie[]>();

      for (const genre of genres) {
        pages.current.set(genre, 0);
        const data = await getMovies(genre.id);
        map.set(genre, data);
      }

      setMovies(map);
    })();
  }, []);

  const loadNextMovies = async (genre: IGenre) => {
    const map = new Map<IGenre, IMovie[]>(movies);
    let data = map.get(genre);
    const page = pages.current.get(genre)! + 1;

    const res = await getMovies(genre.id, page);
    data = [...(data || []), ...res];
    map.set(genre, data);

    setMovies(map);
    pages.current.set(genre, page);
  };

  return <MovieContext.Provider value={{ movies, loadNextMovies }}>{children}</MovieContext.Provider>;
};
