// store/stocksSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Stock {
  symbol: string;
  price: number;
  change: number;
}

interface StocksState {
  items: Record<string, Stock>;
  loading: boolean;
}

const initialState: StocksState = {
  items: {},
  loading: false,
};

const StocksState = []

export const fetchStocks = createAsyncThunk(
  "stocks/fetchStocks",
  async (symbols: string[]) => {
    const res = await fetch(`/api/stocks?symbols=${symbols.join(",")}`);
    return (await res.json()) as Stock[];
  }
);

const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStocks.fulfilled, (state, action) => {
        state.loading = false;
        action.payload.forEach((stock) => {
          state.items[stock.symbol] = stock;
        });
      });
  },
});

export default stocksSlice.reducer;
