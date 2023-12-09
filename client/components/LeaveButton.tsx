"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const LeaveButton = () => {
	const router = useRouter();
	return (
		<Button
			variant={"destructive"}
			className="absolute bottom-10 w-full"
			onClick={() => router.replace("/")}
		>
			Leave
		</Button>
	);
};

export default LeaveButton;
