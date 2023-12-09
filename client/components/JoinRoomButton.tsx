"use client";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import * as z from "zod";
import { nanoid } from "nanoid";
import { joinRoomSchema } from "@/lib/validations/joinRoomSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useUserState } from "@/stores/userStore";

type joinRoomForm = z.infer<typeof joinRoomSchema>;

const JoinRoomButton = () => {
	const router = useRouter();
	const setUser = useUserState((state) => state.setUser);
	const form = useForm<joinRoomForm>({
		resolver: zodResolver(joinRoomSchema),
		defaultValues: {
			username: "",
			roomId: "",
		},
	});
	const onSubmit = ({ roomId, username }: joinRoomForm) => {
		router.replace(`/${roomId}`);
		setUser({
			id: nanoid(),
			name: username,
		});
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" className="w-full">
					Join a Room
				</Button>
			</DialogTrigger>

			<DialogContent className="rounded-md w-[90vw] max-w-[400px] flex flex-col space-y-2">
				<DialogHeader>
					<DialogTitle>Join A Room Now!</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col space-y-4"
					>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder="Username" {...field} />
									</FormControl>
									<FormMessage className="text-xs" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="roomId"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder="Room Id" {...field} />
									</FormControl>
									<FormMessage className="text-xs" />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full">
							Join Room
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default JoinRoomButton;
