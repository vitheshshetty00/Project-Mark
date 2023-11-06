import React from 'react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';


const Header = () => {
    const download = () => {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'markit.png';
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <>
        <div className='rounded-full left-14 bg-red-400  justify-center saturate-200 w-12 h-12 absolute z-0 '></div>
        <header className="sticky top-0 z-40 border-b w-full bg-background/20 saturate-200 backdrop-blur-sm select-none">
            <div className='flex justify-between items-center py-3 container'>
                <h2 className='text-xl font-bold'>MARK&gt;</h2>
            
                <div className='flex items-center gap-4'>
                    <Button onClick={download} size={'default'} variant={'outline'}>
                        Save
                    </Button>

                    <ThemeToggle/>

                </div>

            </div>
            
        </header>
        </>
    );
};

export default Header;
