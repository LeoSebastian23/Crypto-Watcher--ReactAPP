import React from "react";

const RowCoin = ({ coins, index }) => {
    console.log(coins,index);
  return (
    <tr>
        <td>{index}</td>

        <td>
            <img src={coins.image} alt={coins.name} style={{width:'3%'}} className="img-fluid me-3"></img>
            <span>{coins.name}</span>
            <span className="ms-3 text-muted text-uppercase">{coins.symbol}</span>
        </td>
        <td className={coins.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>{coins.current_price}</td>
        <td>{coins.price_change_percentage_24h}</td>
        <td>{coins.total_volume}</td>
    </tr>
  );
};

export default RowCoin;
