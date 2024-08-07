import React from "react";
interface CryptoCardProps {
  coin: {
    image: string;
    name: string;
    symbol: string;
    price_change_percentage_24h: number;
    current_price: number;
  };
  index: number;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ coin, index }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).replace('.', '#').replace(',', '.').replace('#', ',');
  };

  return (
    <div
      className="card mb-3 p-2 text-bg-dark crypto-card"
      style={{ width: "18rem", color: "#343a40" }}
    >
      <div className="d-flex justify-center align-items-center">
        <img
          src={coin.image}
          className="card-img-top"
          alt={coin.name}
          style={{ width: "50px" }}
        />
         <h5 className="card-title p-2">
          {coin.name}
          <span className="text-muted text-uppercase p-2">({coin.symbol})</span>
        </h5>
      </div>
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-semibold mb-0">
            ${formatPrice(coin.current_price)}
          </p>
          <p
            className={
              coin.price_change_percentage_24h > 0
                ? "text-success mb-0"
                : "text-danger mb-0"
            }
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
