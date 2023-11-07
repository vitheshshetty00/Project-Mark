import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const JoinRoomButton = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" className="w-full">
					Join a Room
				</Button>
			</DialogTrigger>

			<DialogContent className=" rounded-md max-w-[350px] md:max-w-[425px] flex flex-col space-y-2">
				<DialogHeader>
					<DialogTitle>Join A Room Now!</DialogTitle>
				</DialogHeader>
				<Input placeholder="username" />
				<Input placeholder="room ID" />
				<Button>Join Room</Button>
			</DialogContent>
		</Dialog>
	);
};

export default JoinRoomButton;
