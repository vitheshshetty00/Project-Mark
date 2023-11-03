"use client";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
const StrokeSlider = () => {
	const [strokeWidth, setStrokeWidth] = useState([3]);
	return (
		<div>
			<div className="flex items-center justify-between mb-4">
				<Label>Stroke Width</Label>
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
