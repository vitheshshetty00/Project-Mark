import { useMembersStore } from "@/stores/membersStore";
import { ScrollArea } from "./ui/scroll-area";
import { useEffect } from "react";
import { socket } from "@/lib/socket";
import { Notification } from '@/types/index'
import { useToast } from "./ui/use-toast";

const Members = () => {


	const [members,setMembers] = useMembersStore(state => [
		state.members,
		state.setMembers
	])

	const {toast} = useToast()

	useEffect(()=>{
		socket.on('update-members',members => {
			setMembers(members)
		})
		
		socket.on('notification',({title,description}:Notification) =>{
			toast({
				title,
				description
			})

		})

		return ()=>{
			socket.off('update-members')
			socket.off('notification')
		}

	},[])

	return (
		<div className="my-3 py-3 border-t-2">
			<h2 className="font-medium text-lg pb-2.5">Members</h2>
			<ScrollArea className="h-48">
				<ul className=" flex flex-col gap-1 rounded-md px-1">
					{members.map(({id,username}) => (
						<li key={id}>{username}</li>
					))}
				</ul>
			</ScrollArea>
		</div>
	);
};
export default Members;
