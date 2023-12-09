import React from "react";
import ColorPicker from "./ColorPicker";
import StrokeSlider from "./StrokeSlider";
import DashGapSlider from "./DashGapSlider";
import Members from "./Members";
import LeaveButton from "./LeaveButton";

const Sidebar = () => {
	const member = ["vithesh", "mani", "sudeep"];
	return (
		<div className="hidden   border-l p-6 md:flex   w-[18%]  min-h-full ">
			<div className=" relative flex-col flex w-full gap-8">
				<ColorPicker />
				<StrokeSlider />
				<DashGapSlider />
				<Members />
				<LeaveButton />
			</div>
		</div>
	);
};

export default Sidebar;
