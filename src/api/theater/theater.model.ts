import { z } from "zod";

export const searchTheaterSchema = z.object({
  name: z.string(),
});

export type SearchTheaterInput = z.infer<typeof searchTheaterSchema>;
