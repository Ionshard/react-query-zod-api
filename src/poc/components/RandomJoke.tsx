import { Joke } from "./Joke";
import { useRandomJoke } from "../api/jokeApi";

export const RandomJoke = () => {
  const { data } = useRandomJoke();

  if (!data) return <div>Loading...</div>;

  const { setup, punchline } = data;

  // return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return <Joke setup={setup} punchline={punchline} />;
};
