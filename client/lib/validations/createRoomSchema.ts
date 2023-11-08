import * as z from "zod";

export const createRoomSchema = z.object({
	username: z
		.string()
		.min(2, "username must contain atleast 2 letters.")
		.max(50, "Username cannot have have more than 50 letters."),
});
