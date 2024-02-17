import React from 'react';
import CoinData from './CoinData';

const Coin = ({ name, image, symbol, price, marketcap, priceChange }) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price}</p>
                    <p className='coin-volume'>${marketcap.toLocaleString()}</p>
                    <p className={`coin-percent ${priceChange < 0 ? 'red' : 'green'}`}>{priceChange.toFixed(2)}%</p>
                </div>
            </div>
            <CoinData />
        </div>
    );
};

export default Coin;
