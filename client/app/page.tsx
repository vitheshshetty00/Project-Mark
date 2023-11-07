import { nanoid } from "nanoid";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CopyButton from "@/components/CopyButton";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import JoinRoomButton from "@/components/JoinRoomButton";

export default function Home() {
	const roomId = nanoid();
	return (
		<div className="h-screen w-full flex items-center justify-center">
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
					<form className="flex flex-col space-y-4">
						<div>
							<Label htmlFor="name" className="font-bold">
								Username
							</Label>
							<Input placeholder="Mr.Marker" />
						</div>

						<div>
							<Label htmlFor="roomId" className="font-bold">
								Room ID
							</Label>
							<div className="flex h-10 w-full justify-between items-center  rounded-md border bg-background px-3 py-2 text-muted-foreground text-sm">
								<span>{roomId}</span>
								<CopyButton value={roomId} />
							</div>
						</div>
						<Button className="w-full">Create a Room</Button>
					</form>

					<div className="flex space-x-2 items-center justify-center ">
						<Separator className="w-[45%]" />
						<span className="text-muted-foreground text-xs">OR</span>
						<Separator className="w-[45%]" />
					</div>
					<JoinRoomButton/>
				</CardContent>
			</Card>
		</div>
	);
}
