import React from 'react';
import RowCoin from './RowCoin';

const titles =['#','Coins','Price','Price Changes','24h Volume'];

const TableCoins = ({coins,search}) => {
    
    const filteredCoins = coins.filter((coin) =>
     coin.name.toLowerCase().includes(search.toLowerCase()) |
     coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <table className='table table-dark mt-3 table-hover'>
        <thead>
            <tr>{
                titles.map( (title,index) => (
                    <td key={index}>{title}</td>
                ))
                }
            </tr>
        </thead>
        <tbody>
            {filteredCoins.map((coins,index) =>( //Se genera cada coin con sus respectivos valores.
              <RowCoin coins={coins} key={index} index={index + 1}></RowCoin>  
            ))}
        </tbody>
    </table>
  )
}
export default TableCoins;