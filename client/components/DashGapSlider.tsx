"use client";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useCanvasStore } from "@/stores/canvasStore";

const DashGapSlider = () => {
	const [gapWidth, setGapWidth] = useCanvasStore((state) => [
		state.gapWidth,
		state.setGapWidth,
	]);
	return (
		<div>
			<div className="flex items-center justify-between mb-4">
				<Label htmlFor="gapWidth" className="select-none">
					Gap Width
				</Label>
				<span className="text-sm ">{gapWidth}</span>
			</div>

			<Slider
				min={1}
				max={50}
				step={1}
				value={gapWidth}
				onValueChange={setGapWidth}
			/>
		</div>
	);
};

export default DashGapSlider;
