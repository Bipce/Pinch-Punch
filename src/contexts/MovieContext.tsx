import React, { createContext, useState } from "react";
import { IMovie } from "../models/Movie(s)/IMovie";

type MovieContextType = {
  movie: IMovie[] | null;
  setMovie: React.Dispatch<React.SetStateAction<IMovie[] | null>>;
};

type MovieContextProviderProps = {
  children: React.ReactNode;
};

export const MovieContext = createContext<MovieContextType | null>(null);

export const MovieContextProvider = ({ children }: MovieContextProviderProps) => {
  const [movie, setMovie] = useState<IMovie[] | null>(null);
  return <MovieContext.Provider value={{ movie, setMovie }}>{children}</MovieContext.Provider>;
};
