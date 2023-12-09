"use client";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { HexAlphaColorPicker } from "react-colorful";
import { useCanvasStore } from "@/stores/canvasStore";

const ColorPicker = () => {
	const [strokeColor, setStrokeColor] = useCanvasStore((state) => [
		state.strokeColor,
		state.setStrokeColor,
	]);
	return (
		<div>
			<Label htmlFor="strokeColor" className="select-none">
				Stroke Color
			</Label>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						className="mt-2 w-full ring-2 ring-border border-white ring-offset-2"
						style={{ background: strokeColor }}
					/>
				</PopoverTrigger>
				<PopoverContent className="w-fit mt-4">
					<HexAlphaColorPicker color={strokeColor} onChange={setStrokeColor} />
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default ColorPicker;
