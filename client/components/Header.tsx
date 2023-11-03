import React from 'react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
    return (
        <header className="sticky top-0 z-40 border-b w-full">
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
    );
};

export default Header;
