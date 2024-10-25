import z from "zod";

export const createGroupSchema = z.object({
  theaterId: z.string(),
  movieId: z.string(),
  showtimeDate: z.string(),
});

export type CreateGroupInput = z.infer<typeof createGroupSchema>;
