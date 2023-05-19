export const Trade = () => {
  return (
    <div className="content">
      <div className="grid-container">
        <div className="pair top zone">
          <div className="pair-price">
            <p>ETH/USDT</p> <span>$1,806</span>
          </div>
        </div>
        <div className="order-title zone top justify-center">
          <p>Order Book</p>
        </div>
        <div className="spot-title top justify-center">
          <p>Spot</p>
        </div>
        <div className="time zone">
          <div className="times">
            <span>1s</span>
            <span>15m</span>
            <span>1H</span>
            <span>4H</span>
            <span>1D</span>
          </div>
        </div>
        <div className="order-specs">
          <p>Price(USDT)</p>
          <p>Price(ETH)</p>
          <p>Total</p>
        </div>
        <div className="chart zone"></div>
        <div className="orders-list zone"></div>
        <div className="open-orders zone">
          <div className="open-orders--">
            <span>Open Orders</span>
            <span>Order History</span>
            <span>Trade History</span>
            <span>Funds</span>
          </div>
        </div>
        <div className="market-title zone">
          <p>Market Trades</p>
        </div>
        <div className="open-orders-list"></div>
        <div className="trades-list"></div>
        <div className="spot-buy">
          <div className="trade-zone">
            <div className="buy-sell">
              <button className="buy">Buy</button>
              <button className="sell">Sell</button>
            </div>

            <input className="price" type="text" placeholder="Price" />
            <input className="amount" type="text" placeholder="Amount" />
            <input className="range" type="range" />
            <input className="total" type="text" placeholder="Total" />
            <button className="buy-final">Buy ETH</button>
          </div>
        </div>
      </div>
    </div>
  );
};
