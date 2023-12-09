
import ColorPicker from "./ColorPicker";
import StrokeSlider from "./StrokeSlider";
import DashGapSlider from "./DashGapSlider";
import Members from "./Members";
import LeaveButton from "./LeaveButton";

const BottomPannel = () => {
	
	return (
		<div className="w-full relative h-full flex flex-col gap-4">
			<ColorPicker />
			<StrokeSlider />
			<DashGapSlider />
			<Members/>
			<LeaveButton/>

		</div>
	);
};

export default BottomPannel;
