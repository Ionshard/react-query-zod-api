import { Joke } from "./Joke";
import { useRandomJokeByType } from "../api/jokeApi";

export const RandomProgrammingJoke = () => {
  const { data } = useRandomJokeByType({ type: "programming" });

  if (!data) return <span>Loading ...</span>;

  const { setup, punchline } = data[0];
  return <Joke setup={setup} punchline={punchline} />;
};
