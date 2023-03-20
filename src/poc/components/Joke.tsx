export type JokeProps = {
  setup: string;
  punchline: string;
};

export const Joke = ({ setup, punchline }: JokeProps) => {
  return (
    <div>
      <span>{setup}</span>
      <br /> ... <br />
      <span>{punchline}</span>
    </div>
  );
};
