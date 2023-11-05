
import ColorPicker from "./ColorPicker";
import StrokeSlider from "./StrokeSlider";
import DashGapSlider from "./DashGapSlider";

const BottomPannel = () => {
	return (
		<div className="w-full flex flex-col gap-3">
			<ColorPicker />
			<StrokeSlider />
			<DashGapSlider />
		</div>
	);
};

export default BottomPannel;
