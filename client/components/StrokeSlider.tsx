"use client";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useCanvasStore } from "@/stores/canvasStore";

const StrokeSlider = () => {
	const { strokeWidth, setStrokeWidth } = useCanvasStore();
	return (
		<div>
			<div className="flex items-center justify-between mb-4">
				<Label htmlFor="strokeWidth" className="select-none">
					Stroke Width
				</Label>
				<span className="text-sm ">{strokeWidth}</span>
			</div>

			<Slider
				min={1}
				max={50}
				step={1}
				value={strokeWidth}
				onValueChange={setStrokeWidth}
			/>
		</div>
	);
};

export default StrokeSlider;
