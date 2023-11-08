"use client";

import * as z from "zod";
import { createRoomSchema } from "@/lib/validations/createRoomSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import CopyButton from "./CopyButton";

interface createRoomFormProps {
	roomId: string;
}
type createRoomForm = z.infer<typeof createRoomSchema>;

const CreateRoomForm = ({ roomId }: createRoomFormProps) => {
	const form = useForm<createRoomForm>({
		resolver: zodResolver(createRoomSchema),
		defaultValues: {
			username: "",
		},
	});
	const onSubmit = (values: createRoomForm) => {
		console.log(values);
	};

	return (
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
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="john doe" {...field} />
							</FormControl>
							<FormMessage className="text-xs" />
						</FormItem>
					)}
				/>

				<div>
					<Label htmlFor="roomId" className="font-medium mb-2 text-sm">
						Room ID
					</Label>
					<div className="flex h-10 w-full justify-between items-center  rounded-md border bg-background px-3 py-2 text-muted-foreground text-sm">
						<span>{roomId}</span>
						<CopyButton value={roomId} />
					</div>
				</div>
				<Button type="submit" className="w-full">
					Create a Room
				</Button>
			</form>
		</Form>
	);
};

export default CreateRoomForm;
