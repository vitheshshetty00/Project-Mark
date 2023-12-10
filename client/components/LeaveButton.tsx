"use client";
import { socket } from "@/lib/socket";
import { Button } from "./ui/button";
import { useRouter,useParams } from "next/navigation";

const LeaveButton = () => {
	const router = useRouter();
	const {roomId} = useParams()
	return (
		<Button
			variant={"destructive"}
			className="absolute bottom-10 w-full"
			onClick={() => {
				socket.emit('leave-room',roomId)
				router.replace("/")}}
		>
			Leave
		</Button>
	);
};

export default LeaveButton;
