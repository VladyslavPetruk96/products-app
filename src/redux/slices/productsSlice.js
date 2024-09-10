import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	loading: false,
};

export const fetchProducts = createAsyncThunk(
	"productsList/fetchProducts",
	async () => {
		const res = await fetch("http://localhost:3001/products");
		const data = await res.json();
		return data;
	}
);

const productsSlice = createSlice({
	name: "productsList",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchProducts.pending, state => {
			state.loading = true;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.loading = false;
			state.items = action.payload.products || [];
		});
		builder.addCase(fetchProducts.rejected, state => {
			state.loading = false;
		});
	},
});

export default productsSlice.reducer;
