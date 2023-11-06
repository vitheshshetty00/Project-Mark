import { create } from 'zustand'

interface CanvasState{
    strokeColor:string
    strokeWidth:number[]
    gapWidth:number[]
    setStrokeColor:(strokeColor:string) => void
    setStrokeWidth:(strokeWidth:number[] ) => void
    setGapWidth:(gapWidth:number[]) => void
}

export const useCanvasStore = create<CanvasState>(set =>({
    strokeColor:'#000',
    strokeWidth:[3],
    gapWidth:[3],
    setStrokeColor: strokeColor => set({strokeColor}),
    setStrokeWidth: strokeWidth => set({strokeWidth}),
    setGapWidth:gapWidth => set({gapWidth})
}))