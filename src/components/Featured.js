import React from 'react'
import './Featured.css'

import Card from './Card';
const Featured = () => {
    // nel componente card viene fatta la logica
    return (
        <div className="featured">
            <div className="container">
                <div className="left">
                    <h2>Explore top Crypt's Like Bitcoin,Ethereum, and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <button className="btn">See More coins</button>
                </div>
                <Card />
            </div>
        </div>
    )
}
export default Featured