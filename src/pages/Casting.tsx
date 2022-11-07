import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CastingDetails from "../components/CastingDetails/CastingDetails";
import { ICast } from "../models/Credits/ICast";
import { ICrew } from "../models/Credits/ICrew";
import { IMovie } from "../models/Movie(s)/IMovie";
import { getCredits, getMovie } from "../services/backend";

const Casting = () => {
  const [movie, setMovie] = useState<IMovie>();
  const [cast, setCast] = useState<ICast[]>();
  const [crew, setCrew] = useState<ICrew[]>();

  const { id } = useParams<{ id: string }>();

  if (id == undefined) return null;

  useEffect(() => {
    (async () => {
      const credits = await getCredits(parseInt(id));
      setMovie(await getMovie(parseInt(id)));

      if (credits) {
        setCast(credits.cast);
        setCrew(credits.crew);
      }
    })();
  }, []);

  if (!movie || !cast || !crew) return null;

  return <CastingDetails movie={movie} cast={cast} crew={crew} />;
};

export default Casting;
