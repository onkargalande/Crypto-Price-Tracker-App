import React from 'react';
import Coin from './Coin';

const CoinList = ({ coins }) => {
    return (
        <div className="coin-list">
            {coins.map(coin => (
                <Coin
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    marketcap={coin.market_cap}
                    priceChange={coin.price_change_percentage_24h}
                />
            ))}
        </div>
    );
};

export default CoinList;
