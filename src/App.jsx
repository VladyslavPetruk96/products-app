import { Navigate, Route, Routes } from "react-router";
import * as s from "./App.styled.js";
import CurrentProduct from "./pages/CurrentProduct";
import ProductsPage from "./pages/ProductsPage";

function App() {
	return (
		<s.BodyWrapper>
			<Routes>
				<Route path="/" exact element={<Navigate to="/products" />} />
				<Route path="/products" exact element={<ProductsPage />} />
				<Route path="/products/:id" exact element={<CurrentProduct />} />
			</Routes>
		</s.BodyWrapper>
	);
}

export default App;
