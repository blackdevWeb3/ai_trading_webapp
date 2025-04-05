// components/SmartTable.tsx
'use client';

import React, { useState, useMemo } from 'react';
import Papa from 'papaparse';

type DataRow = {
  token: string;
  buySize: string;
  sellSize: string;
  profit: string;
  sellTime: string;
  duration: string;
  wallet: string;
  etherscan: string;
};

type SmartTableProps = {
  data: DataRow[];
};

const SmartTable: React.FC<SmartTableProps> = ({ data }) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState<keyof DataRow>('token');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filtered = useMemo(() => {
    return data.filter((row) =>
      row.token.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const valA = a[sortKey] || '';
      const valB = b[sortKey] || '';
      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filtered, sortKey, sortOrder]);

  const pageCount = Math.ceil(sorted.length / rowsPerPage);
  const paginated = sorted.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  const start = (page - 1) * rowsPerPage + 1;
  const end = Math.min(page * rowsPerPage, sorted.length);

  const exportToCSV = () => {
    const csv = Papa.unparse(sorted);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'portfolio.csv';
    link.click();
  };

  const handleSort = (key: keyof DataRow) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return (
    <div className="text-white space-y-6 w-full">
      {/* Controls */}
      <div className="flex flex-wrap justify-between md:text-2xl text-[16px] font-normal items-center gap-4 md:mb-[100px]">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select
            className="bg-black border border-gray-500 px-2 py-1 rounded"
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setPage(1);
            }}
          >
            {[10, 25, 50, 100].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          <span className='md:block hidden'>entries</span>
        </div>

        <div className="flex items-center gap-2">
          <span>Search</span>
          <input
            type="text"
            className="bg-black border border-gray-500 md:max-w-[200px] max-w-[100px] rounded w-full"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto custom-scrollbar ">
        <table className="w-full text-left text-sm sm:text-base min-w-[1000px]">
          <thead>
            <tr className="font-bold text-[20px] border-b border-gray-700">
              {['token', 'buySize', 'sellSize', 'profit', 'sellTime', 'duration', 'wallet', 'etherscan'].map((key) => (
                <th
                  key={key}
                  className="py-2 px-2 cursor-pointer whitespace-nowrap"
                  onClick={() => handleSort(key as keyof DataRow)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}{' '}
                  {sortKey === key ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.map((row, i) => (
              <tr key={i} className="border-b border-gray-800 font-normal text-[14px]">
                <td className="py-5 px-2">{row.token}</td>
                <td className="py-5 px-2">{row.buySize}</td>
                <td className="py-5 px-2">{row.sellSize}</td>
                <td className="py-5 px-2">{row.profit}</td>
                <td className="py-5 px-2">{row.sellTime}</td>
                <td className="py-5 px-2">{row.duration}</td>
                <td className="py-5 px-2 sm:table-cell">{row.wallet}</td>
                <td className="py-5 px-2 text-blue-400 underline cursor-pointer md:table-cell">
                  {row.etherscan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex md:justify-between justify-center items-center mt-4 flex-wrap gap-2">
        <div className='md:text-2xl text-[20px] font-normal'>
          Showing {start} to {end} of {filtered.length.toLocaleString()} entries
        </div>
        <div className="flex items-center gap-10">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="disabled:text-[#FFFFFF45]"
          >
            Previous
          </button>
          {[...Array(Math.min(5, pageCount)).keys()].map((n) => {
            const pageNum = n + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={pageNum === page ? 'font-bold underline' : ''}
              >
                {pageNum}
              </button>
            );
          })}
          <span>...</span>
          <button
            onClick={() => setPage(pageCount)}
            className={page === pageCount ? 'font-bold underline' : ''}
          >
            {pageCount}
          </button>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, pageCount))}
            disabled={page === pageCount}
            className="disabled:text-gray-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartTable;
