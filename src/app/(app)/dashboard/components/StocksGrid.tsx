"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchStocks } from "@/store/slices/stocksSlice";
import { StockCard } from "@/components/ui/StockCard";

const SYMBOLS = [
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "MSFT", name: "Microsoft" },
  { symbol: "GOOGL", name: "Alphabet" },
  { symbol: "AMZN", name: "Amazon" },
  { symbol: "META", name: "Meta" },
  { symbol: "TSLA", name: "Tesla" },
  { symbol: "NVDA", name: "NVIDIA" },
  { symbol: "NFLX", name: "Netflix" },
  { symbol: "AMD", name: "AMD" },
];

export function StocksGrid() {
  const dispatch = useAppDispatch();
  const stocks = useAppSelector((state) => state.stocks.items);

  useEffect(() => {
    const symbols = SYMBOLS.map((s) => s.symbol);

    dispatch(fetchStocks(symbols));
    const i = setInterval(
      () => dispatch(fetchStocks(symbols)),
      60_000
    );

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {SYMBOLS.map(({ symbol, name }) => {
        const stock = stocks[symbol];

        return (
          <StockCard
            key={symbol}
            symbol={symbol}
            name={name}
            price={stock?.price ?? 0}
            change={stock?.change ?? 0}
          />
        );
      })}
    </div>
  );
}
