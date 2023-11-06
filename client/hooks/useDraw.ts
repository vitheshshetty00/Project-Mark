import {useRef,useState,useEffect} from 'react'

interface Point{
    x: number,
    y:number
}

export interface DrawProps{
    ctx:CanvasRenderingContext2D,
    currentPoint:Point,
    prevPoint:Point | undefined
}

export default function useDraw(onDraw: (draw:DrawProps) => void){
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const prevPointRef =  useRef<Point>()

    const [mouseDown, setMouseDown] = useState(false)

    const onInteractionStart = () =>{
        setMouseDown(true)
    }

    const clear = () => {
        const canvasElement = canvasRef.current
        if(!canvasElement) return

        const ctx = canvasElement.getContext("2d")
        if(!ctx) return

        ctx.clearRect(0,0,canvasElement.width,canvasElement.height)
    }

    useEffect(() => {
        const computePointInCanvas = (clientX:number,clientY:number) =>{
            const canvasElement = canvasRef.current
            if(!canvasElement) return

            const rect = canvasElement.getBoundingClientRect()
            const x= clientX - rect.left
            const y = clientY - rect.top
            return {x,y}

        }
        const handleMouseMove = (e:MouseEvent | TouchEvent) =>{
            if(!mouseDown) return

            const canvasElement = canvasRef.current
            if(!canvasElement) return

            const  ctx= canvasElement.getContext("2d")
            let currentPoint

            if(e instanceof MouseEvent)
            {
                currentPoint = computePointInCanvas(e.clientX,e.clientY)
            }
            if(e instanceof TouchEvent)
            {
                currentPoint = computePointInCanvas(e.touches[0].clientX,e.touches[0].clientY)
            }

            if(!ctx || !currentPoint) return

            onDraw({ctx,currentPoint,prevPoint:prevPointRef.current})
            prevPointRef.current=currentPoint
            
        }

        const onInteractionEnd = ()=>{
            setMouseDown(false)
            prevPointRef.current = undefined

        }
         
        window.addEventListener('mousemove',handleMouseMove)
        window.addEventListener('mouseup',onInteractionEnd)
    
        return  () => {
            window.removeEventListener('mousemove',handleMouseMove)
            window.removeEventListener('mouseup',onInteractionEnd)
        }
    }, [mouseDown,onDraw]);

    return {canvasRef,onInteractionStart,clear}
}

