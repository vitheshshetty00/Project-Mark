import BottomPannel from "@/components/BottomPannel";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PanelBottom } from "lucide-react";

export default function Home() {
	return (
		<div>
			<Header />
			<div className="flex justify-between h-[calc(100vh-3.8rem)]">
				<main className="w-full md:w-[85%]"></main>
				<Sidebar />
				<div className="md:hidden absolute bottom-4 right-4">
					<Sheet >
						<SheetTrigger asChild>
							<Button variant={"outline"} size={"icon"} className="w-14 h-14 rounded-full shadow-md" >
								<PanelBottom  />
							</Button>
						</SheetTrigger>
						<SheetContent side={"bottom"}>
							<BottomPannel/>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</div>
	);
}
