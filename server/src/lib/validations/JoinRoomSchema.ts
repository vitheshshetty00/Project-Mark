import * as z from "zod";

export const joinRoomSchema = z.object({
	username: z
		.string()
		.min(2, "username must contain atleast 2 letters.")
		.max(50, "Username cannot have have more than 50 letters."),
	roomId: z
		.string()
		.trim()
		.length(21, "Room Id should contain exactly 21 letters."),
});
