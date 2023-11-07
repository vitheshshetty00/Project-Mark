'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import { Copy,Check } from 'lucide-react'

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    value:string
}

const CopyButton = ({value}:CopyButtonProps) => {
    const [isCopied, setIsCopied] = useState(false);

  return (
    <Button
    onClick={()=>{navigator.clipboard.writeText(value) 
        setIsCopied(true)
        setTimeout(()=>setIsCopied(false),3000)
    }}
    type='button'
    variant="ghost"
    className='h-fit rounded-sm p-0'

    >
        <span className='sr-only'>copy</span>
        {isCopied ? <Check className='h-4 w-4 text-green-800'/> : <Copy className='h-4 w-4' />}
    </Button>
  )
}

export default CopyButton
