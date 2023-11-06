import React from 'react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
    return (
        <>
        <div className='rounded-full left-14 bg-red-400  justify-center saturate-200 w-12 h-12 absolute z-0 '></div>
        <header className="sticky top-0 z-40 border-b w-full bg-background/20 saturate-200 backdrop-blur-sm select-none">
            <div className='flex justify-between items-center py-3 container'>
                <h2 className='text-xl font-bold'>MARK&gt;</h2>
            
                <div className='flex items-center gap-4'>
                    <Button size={'default'} variant={'outline'}>
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
