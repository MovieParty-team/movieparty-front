import { z } from "zod";

export const geUserSchema = z.object({
  uuid: z.string(),
});

export type GeUserInput = z.infer<typeof geUserSchema>;
