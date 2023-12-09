"use client";
import { useRef, useCallback, useEffect } from "react";
import { Button } from "./ui/button";

import useDraw, { type DrawProps } from "@/hooks/useDraw";
import { useCanvasStore } from "@/stores/canvasStore";
import { useRouter } from "next/router";
import { useUserState } from "@/stores/userStore";

const DrawingCanvas = () => {
	const router = useRouter();
	const containerRef = useRef<HTMLDivElement>(null);
	const strokeColor =useCanvasStore(state=>state.strokeColor);
    
	const strokeWidth =useCanvasStore(state=>state.strokeWidth);
    
	const gapWidth  = useCanvasStore(state=>state.gapWidth);
    
	const user = useUserState(state => state.user)
	useEffect(()=>{
		if(!user){
			router.replace('/')
		}
	},[user])

	const draw = useCallback(
		({ ctx, currentPoint, prevPoint }: DrawProps) => {
			const startPoint = prevPoint ?? currentPoint;
			const { x: currX, y: currY } = currentPoint;

			ctx.lineWidth = strokeWidth[0];
			ctx.strokeStyle = strokeColor;
			ctx.setLineDash(gapWidth);
			ctx.lineJoin = "round";
			ctx.lineCap = "round";

			ctx.beginPath();
			ctx.moveTo(startPoint.x, startPoint.y);
			ctx.lineTo(currX, currY);
			ctx.stroke();
		},
		[strokeColor, strokeWidth, gapWidth]
	);

	const { canvasRef, onInteractionStart, clear } = useDraw(draw);

	useEffect(() => {
		const setCanvasDimensions = () => {
			if (!containerRef.current || !canvasRef.current) return;

			const { width, height } = containerRef.current?.getBoundingClientRect();
			canvasRef.current.width = width - 50;
			canvasRef.current.height = height - 50;
		};
		setCanvasDimensions();
		window.addEventListener("resize", setCanvasDimensions);
		return () => window.removeEventListener("resize", setCanvasDimensions);
	}, []);

	return (
		<div
			ref={containerRef}
			className="relative flex p-4 h-full w-full items-center justify-center"
		>
			<Button
				variant="outline"
				onClick={clear}
				className="absolute right-[16px] top-[16px] select-none rounded-none rounded-tr-md rounded-bl border-0 border-b border-l"
			>
				Clear
			</Button>

			<canvas
                id="canvas"
				ref={canvasRef}
				onMouseDown={onInteractionStart}
                onTouchStart={onInteractionStart}
				className="rounded-md w-full h-full border bg-white"
			/>
		</div>
	);
};

export default DrawingCanvas;
