"use client";
import { useRef, useCallback, useEffect } from "react";
import { Button } from "./ui/button";

import useDraw, { type DrawProps } from "@/hooks/useDraw";

const DrawingCanvas = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	const draw = useCallback(({ ctx, currentPoint, prevPoint }: DrawProps) => {
		const startPoint = prevPoint ?? currentPoint;
		const { x: currX, y: currY } = currentPoint;
		const linecolor = "#000";
		const linewidth = 3;

		ctx.lineWidth = linewidth;
		ctx.strokeStyle = linecolor;
		ctx.lineJoin = "round";
		ctx.lineCap = "round";

		ctx.beginPath();
		ctx.moveTo(startPoint.x, startPoint.y);
		ctx.lineTo(currX, currY);
		ctx.stroke();
	}, []);

	const { canvasRef, onMouseDown, clear } = useDraw(draw);

	useEffect(() => {
		const setCanvasDimensions = () => {
			if (!containerRef.current || !canvasRef.current) return;

			const { width, height } = containerRef.current?.getBoundingClientRect();
			canvasRef.current.width = width - 50;
			canvasRef.current.height = height - 50;
		};
        setCanvasDimensions()
        window.addEventListener('resize',setCanvasDimensions)
        return () => window.removeEventListener('resize', setCanvasDimensions)
	}, []);

	return (
		<div
			ref={containerRef}
			className="relative flex p-4 h-full w-full items-center justify-center"
		>
			<Button
				variant="outline"
				onClick={clear}
				className="absolute right-[10px] top-[10px] select-none rounded-none rounded-bl border-0 border-b border-l"
			>
				Clear
			</Button>

			<canvas
				ref={canvasRef}
				onMouseDown={onMouseDown}
				className="rounded w-full h-full border bg-white"
			/>
		</div>
	);
};

export default DrawingCanvas;
