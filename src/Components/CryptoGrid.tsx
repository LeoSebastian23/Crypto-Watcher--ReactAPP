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
    price_history?: number[];
  }[];
  search: string;
}

const CryptoGrid: React.FC<CryptoGridProps> = ({ coins, search }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
        {filteredCoins.map((coin, index) => (
          <div key={index} className="col mb-4 d-flex justify-content-center">
            <CryptoCard coin={coin} index={index + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoGrid;
