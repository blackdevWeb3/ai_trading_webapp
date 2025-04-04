'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [activeTab, setActiveTab] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNav = (label: string, path: string) => {
    setActiveTab(label);
    router.push(path);
    setIsOpen(false);
  };

  return (
    <div className={`bg-[#26292E] navshadow text-white px-6 py-3 flex md:flex-row flex-col items-center justify-between rounded-lg w-full ${isOpen ? "h-[250px]" : "md:h-[90px] h-[60px]"} transition-all duration-500 ease-in-out overflow-hidden`}>
      <div className='flex items-center justify-between w-full'>
        <h2 className="text-3xl italic font-normal">AI Trading</h2>

        <div className="space-x-4 hidden md:flex">
          <button onClick={() => handleNav('AI Trading Performance', '/')} className={`px-4 py-2 rounded-lg text-[16px] font-normal transition-colors duration-300 ${activeTab === 'AI Trading Performance' ? 'bg-[#61C4E133] text-white' : 'text-gray-400 hover:text-white'}`}>AI Trading Performance</button>
          <button onClick={() => handleNav('Current Buys', '/current-buys')} className={`px-4 py-2 rounded-lg text-[16px] font-normal transition-colors duration-300 ${activeTab === 'Current Buys' ? 'bg-[#61C4E133] text-white' : 'text-gray-400 hover:text-white'}`}>Current Buys</button>
          <button onClick={() => handleNav('Past Transactions', '/past-transactions')} className={`px-4 py-2 rounded-lg text-[16px] font-normal transition-colors duration-300 ${activeTab === 'Past Transactions' ? 'bg-[#61C4E133] text-white' : 'text-gray-400 hover:text-white'}`}>Past Transactions</button>
          <button onClick={() => handleNav('Portfolio', '/portfolio')} className={`px-4 py-2 rounded-lg text-[16px] font-normal transition-colors duration-300 ${activeTab === 'Portfolio' ? 'bg-[#61C4E133] text-white' : 'text-gray-400 hover:text-white'}`}>Portfolio</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="w-full mx-5 px-5 flex flex-col items-center md:hidden transition-all duration-500 ease-in-out space-y-2 mt-4">
          <button onClick={() => handleNav('AI Trading Performance', '/')} className={`w-full text-center px-4 py-2 rounded-lg text-sm transition-colors duration-300 ${activeTab === 'AI Trading Performance' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}>AI Trading Performance</button>
          <button onClick={() => handleNav('Current Buys', '/current-buys')} className={`w-full text-center px-4 py-2 rounded-lg text-sm transition-colors duration-300 ${activeTab === 'Current Buys' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}>Current Buys</button>
          <button onClick={() => handleNav('Past Transactions', '/past-transactions')} className={`w-full text-center px-4 py-2 rounded-lg text-sm transition-colors duration-300 ${activeTab === 'Past Transactions' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}>Past Transactions</button>
          <button onClick={() => handleNav('Portfolio', '/portfolio')} className={`w-full text-center px-4 py-2 rounded-lg text-sm transition-colors duration-300 ${activeTab === 'Portfolio' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}>Portfolio</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
