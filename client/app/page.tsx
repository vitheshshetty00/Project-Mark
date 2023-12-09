import { nanoid } from "nanoid";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import JoinRoomButton from "@/components/JoinRoomButton";
import CreateRoomForm from "@/components/CreateRoomForm";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
	const roomId = nanoid();
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<ThemeToggle className="fixed right-[5vw] top-5 md:right-5" />
			<Card className="w-[90vw] max-w-[400px] ">
				<CardHeader>
					<CardTitle className="font-bold">
						Ma<span className="text-red-600">r</span>k&gt;
					</CardTitle>
					<CardDescription>
						Experience creativity like never before! Our real-time canvas allows
						you to collaborate and draw with others in real time.
					</CardDescription>{" "}
				</CardHeader>
				<CardContent className="flex flex-col space-y-4">
					<CreateRoomForm roomId={roomId} />

					<div className="flex space-x-2 items-center justify-center ">
						<Separator className="w-[45%]" />
						<span className="text-muted-foreground text-xs">OR</span>
						<Separator className="w-[45%]" />
					</div>
					<JoinRoomButton />
				</CardContent>
			</Card>
		</div>
	);
}
