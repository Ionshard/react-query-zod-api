import { z } from "zod";
import { createRequestHook } from "./createRequestHook";

const JokeTypeSchema = z.union([
  z.literal("general"),
  z.literal("knock-knock"),
  z.literal("programming"),
]);

// TODO: Code Generate this Schema from JSON Schema
const JokeSchema = z.object({
  id: z.number(),
  type: JokeTypeSchema,
  setup: z.string(),
  punchline: z.string(),
});

type JokeType = z.infer<typeof JokeTypeSchema>;

export const useRandomJoke = createRequestHook({
  baseConfig: { method: "get", url: "random_joke" },
}).validateWith(JokeSchema);

export const useRandomJokeByType = createRequestHook<{ type: JokeType }>({
  baseConfig: { method: "get" },
  buildUrl: ({ type }) => `jokes/${type}/random`,
}).validateWith(z.array(JokeSchema).length(1));
