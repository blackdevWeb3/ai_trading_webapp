// components/LiveTokenTable.tsx
'use client';

import React, { useEffect, useState } from 'react';
import SmartTable from '@/components/DataTable'

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

const LiveTokenTable: React.FC = () => {
  const [data, setData] = useState<DataRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const res = await fetch('/api/coinlist');
        const json = await res.json();

        const now = new Date().toLocaleString();
        const duration = '3d 4h 12m';

        const rows: DataRow[] = json.data.map((token: any, i: number) => ({
          token: `${token.name} (${token.symbol})`,
          buySize: `${(token.quote.USD.price * 0.01).toFixed(4)} ETH`,
          sellSize: `${(token.quote.USD.price * 0.008).toFixed(4)} ETH`,
          profit: `${(token.quote.USD.price * 0.002).toFixed(4)} ETH (0.00X)`,
          sellTime: now,
          duration,
          wallet: `Wallet ${i + 1}`,
          etherscan: `https://etherscan.io/token/${token.id}`,
        }));

        setData(rows);
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
  }, []);

  return (
    <div className="pt-25">
      {loading ? (
        <div className="text-white text-xl">Loading tokens...</div>
      ) : (
        <SmartTable data={data} />
      )}
    </div>
  );
};

export default LiveTokenTable;
