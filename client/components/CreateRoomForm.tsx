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
import { useRouter } from 'next/navigation'
import { useUserState } from '@/stores/userStore'

import { RoomJoinedData } from '@/types/index'
import { socket } from '@/lib/socket'
import { useEffect } from "react";


interface createRoomFormProps {
	roomId: string;
}
type createRoomForm = z.infer<typeof createRoomSchema>;

const CreateRoomForm = ({ roomId }: createRoomFormProps) => {
    const router = useRouter()
	const setUser = useUserState(state => state.setUser)
	const form = useForm<createRoomForm>({
		resolver: zodResolver(createRoomSchema),
		defaultValues: {
			username: "",
		},
	});
	const onSubmit = ({username}:createRoomForm) => {
		socket.emit('create-room',{roomId,username})
	};
	useEffect(()=>{
		socket.on('room-joined',({user,roomId}:RoomJoinedData)=>{
			setUser(user)
			router.replace(`/${roomId}`)
		})
	},[])

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
