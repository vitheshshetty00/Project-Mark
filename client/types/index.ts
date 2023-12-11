import { User } from "@/stores/userStore";

export interface RoomJoinedData {
	user: User;
	roomId: string;
	members: User[];
}

export interface Notification{
	title:string
	description:string
}
