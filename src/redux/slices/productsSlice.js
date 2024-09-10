import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	loading: false,
	selectedProduct: null,
};

export const fetchProducts = createAsyncThunk(
	"productsList/fetchProducts",
	async () => {
		const res = await fetch("http://localhost:3002/products");
		const data = await res.json();
		return data;
	}
);

export const fetchItemById = createAsyncThunk(
	"productsList/fetchItemById",
	async id => {
		const res = await fetch(`http://localhost:3002/products/${id}`);
		const data = await res.json();
		return data;
	}
);

export const fetchDeleteProduct = createAsyncThunk(
	"productsList/deleteProduct",
	async id => {
		const res = await fetch(`http://localhost:3002/products/${id}`, {
			method: "DELETE",
		});
		if (!res.ok) {
			throw new Error("fail delete");
		}
		return id;
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
			state.items = action.payload || [];
		});
		builder.addCase(fetchProducts.rejected, state => {
			state.loading = false;
		});
		builder.addCase(fetchItemById.pending, state => {
			state.loading = true;
		});
		builder.addCase(fetchItemById.fulfilled, (state, action) => {
			state.loading = false;
			state.selectedProduct = action.payload;
		});
		builder.addCase(fetchItemById.rejected, state => {
			state.loading = false;
		});
	},
});

export default productsSlice.reducer;
