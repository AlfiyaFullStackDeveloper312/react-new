import React from "react";
import "./CoinCard.css";

export default class CoinCard extends React.Component {
    render() {
        return (
            <div
            // Coin card
                className="coin-card"
                onClick={() => {
                    this.props.onCoinClick(this.props.coin); 
                    this.props.incrementCounter(this.props.coin); 
                }}
            > 
                {/* Coin-Image */}
                <img className="coin-image" src={this.props.imageName} alt={this.props.coin} />
                {this.props.coinCounter ? (
                    <div className="coin-badge-container">  
                    <span className="coin-badge">Count Coins: {this.props.coinCounter}</span>
                </div>
                ) : null}
                
            </div>
        );
    }
}

 