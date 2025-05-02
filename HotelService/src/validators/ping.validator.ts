import { z } from "zod";
export const pingSchema = z.object({
  ping: z.string().min(1, "Ping is required"),
});
