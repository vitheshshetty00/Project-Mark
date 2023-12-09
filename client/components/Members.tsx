import { ScrollArea } from "./ui/scroll-area";
const Members = () => {
	const member = ["vithesh", "mani", "sudeep", "vithesh", "mani"];
	return (
		<div className="my-3 py-3 border-t-2">
			<h2 className="font-medium text-lg pb-2.5">Members</h2>
			<ScrollArea className="h-48">
				<ul className=" flex flex-col gap-1 rounded-md px-1">
					{member.map((mem, i) => (
						<li key={i}>{mem}</li>
					))}
				</ul>
			</ScrollArea>
		</div>
	);
};
export default Members;
