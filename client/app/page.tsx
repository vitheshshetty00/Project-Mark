'use client'
import BottomPannel from "@/components/BottomPannel";
import DrawingCanvas from "@/components/DrawingCanvas";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PanelBottom } from "lucide-react";
import { useEffect } from 'react'

export default function Home() {
	useEffect(() => {
		const setBodyHeight = () => {
		  document.body.style.height = `${window.innerHeight}px`;
		};	  
		setBodyHeight();
		window.addEventListener('resize', setBodyHeight);
	  
		return () => {
		  window.removeEventListener('resize', setBodyHeight);
		};
	  }, []);
	return (
		<div className="md:w-[100vw] md:h-[100vh]">
			<Header />
			<div className="flex justify-between min-h-[90vh]">
				<main className="w-full md:w-[85%] min-h-[85%]">
					<DrawingCanvas />
				</main>
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
