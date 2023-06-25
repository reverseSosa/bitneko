import React, { useEffect } from "react";

const MarketTrades = ({ pair = "ETHUSDT", setCurrentPrice }) => {
  const [trades, setTrades] = React.useState([]);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${pair.toLowerCase()}@trade`
    );

    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      const { p: price, q: quantity, T: timestamp } = message;
      const date = new Date(timestamp);

      const time = () => {
        return `${String(date.getHours()).padStart(2, "0")}:${String(
          date.getMinutes()
        ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
      };

      const trade = { price: price, quantity: quantity, time: time() };
      setTrades((prevState) => {
        return [...prevState, trade];
      });
      setCurrentPrice(trade.price);
    };

    return () => {
      ws.close();
    };
  }, [pair]);

  useEffect(() => {
    if (trades.length >= 7) {
      const toDelete = trades[0];
      setTrades(trades.filter((t) => t !== toDelete));
    }
  }, [trades]);

  return (
    <>
      {trades.map((trade, index) => (
        <div className="trade" key={index}>
          <div className="total">
            <span>{trade.time}</span>
          </div>
          <div className="amount">
            <span>{Number(trade.quantity).toFixed(2)}</span>
          </div>
          <div className="price-bid">
            <span>{Number(trade.price).toFixed(2)}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default MarketTrades;
