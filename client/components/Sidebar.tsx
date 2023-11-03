import React from "react";
import ColorPicker from "./ColorPicker";
import StrokeSlider from "./StrokeSlider";
import DashGapSlider from "./DashGapSlider";

const Sidebar = () => {
	return (
		<div className="border-l p-6 flex flex-col  w-[18%] max-w-[13rem] gap-8">
			<ColorPicker />
			<StrokeSlider />
			<DashGapSlider />
		</div>
	);
};

export default Sidebar;
