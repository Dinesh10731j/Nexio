'use client'
import { Sun, Moon, User } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import dummyImage from "../../assets/Image.png";
import Nexio from "../../assets/Nexio_Logo.png"
import { Button } from '../ui/button';
const DashboardHeader = () => {
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    return (
        <header className={`fixed top-0 left-0 w-full flex justify-between items-center p-4 shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300 z-10`}>
            <Image src={Nexio} alt='nexio_logo ' height={20} width={20}/>
            <h1 className="text-xl font-bold text-blue-500 ">Nexio</h1>
            <div className="flex items-center gap-4">
                <Button
                    onClick={toggleTheme}
                    className="p-2 rounded-full  transition-colors duration-300"
                    aria-label="Toggle Theme"
                >
                    {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </Button>
                <div className="flex items-center gap-2">
                    <span className="text-gray-800 dark:text-gray-300">User Name</span>
                    <Image
                        src={dummyImage}
                        alt="User Profile"
                        className="w-8 h-8 rounded-full"
                    />
                    <User className="w-5 h-5 text-gray-800 dark:text-gray-300" aria-label="User Profile Icon" />
                </div>
            </div>
        </header>
    );
}

export default DashboardHeader;
