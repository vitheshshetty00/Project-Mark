"use client";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const DashGapSlider = () => {
    const [dashGap, setDashgGap] = useState([3]);
	return (
		<div>
			<div className="flex items-center justify-between mb-4">
				<Label htmlFor="gapWidth">Gap Width</Label>
				<span className="text-sm ">{dashGap}</span>
			</div>

			<Slider
				min={1}
				max={50}
				step={1}
				value={dashGap}
				onValueChange={setDashgGap}
			/>
		</div>
	);
}

export default DashGapSlider
