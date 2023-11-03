import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
	return (
		<div>
			<Header />
			<div className="flex justify-between h-[calc(100vh-3.8rem)]">
				<main className="w-[85%]"></main>
				<Sidebar />
			</div>
		</div>
	);
}
