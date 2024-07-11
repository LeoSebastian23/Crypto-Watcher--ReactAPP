import React from 'react';
import CryptoCard from './CryptoCard';

interface CryptoGridProps {
  coins: {
    image: string;
    name: string;
    symbol: string;
    price_change_percentage_24h: number;
    current_price: number;
    total_volume: number;
  }[];
  search: string;
}

const CryptoGrid: React.FC<CryptoGridProps> = ({ coins, search }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-3">
    <div className="row">
      {filteredCoins.map((coin, index) => (
        <div className="col-md-4" key={index}>
          <CryptoCard coin={coin} index={index + 1} />
        </div>
      ))}
    </div>
  </div>
  );
};

export default CryptoGrid;