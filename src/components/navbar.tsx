'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
function Navbar() {
    
    const [activeTab, setActiveTab] = useState('AI Trading Performance');
    const [isOpen, setIsOpen] = useState(false);

    const tabs = [
        'AI Trading Performance',
        'Current Buys',
        'Past Transactions',
        'Portfolio',
    ];
    return (
        <div className={`bg-[#26292E] navshadow text-white px-6 py-3 flex md:flex-row flex-col items-center justify-between rounded-lg w-full ${isOpen ? "h-[250px]":"md:h-[90px] h-[57px]"} transition-all duration-500 ease-in-out overflow-hidden `}>
            <div className='flex items-center justify-between w-full'>
                <h2 className="text-lg italic font-normal ">AI Trading</h2>

                <div className="space-x-4 hidden md:flex">
                    {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 rounded-lg text-sm transition-colors duration-300 ${
                        activeTab === tab ? 'bg-[#61C4E133] text-white' : 'text-gray-400 hover:text-white'
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isOpen && (
                <div className="w-full mx-5 p-5 flex flex-col items-center md:hidden transition-all duration-500 ease-in-out">
                    {tabs.map((tab) => (
                        <button
                        key={tab}
                        className={`w-full text-center px-4 py-2 rounded-lg text-sm transition-colors duration-300 ${
                        activeTab === tab ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                        }`}
                        onClick={() => {
                            setActiveTab(tab);
                        }}
                        >
                        {tab}
                        </button>
                    ))}
                </div>
                )}
        </div>
    );
}

export default Navbar;