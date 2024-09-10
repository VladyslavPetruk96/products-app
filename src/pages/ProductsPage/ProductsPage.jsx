import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import BtnCreateProduct from "../../components/BtnCreateProduct/BtnCreateProduct";
import ProductInfo from "../../components/ProductInfo";
import {
	fetchDeleteProduct,
	fetchProducts,
} from "../../redux/slices/productsSlice";
import * as s from "./ProductsPage.styled";

function ProductsPage() {
	const products = useSelector(state => state.products.items);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleOpenProductById = id => {
		navigate(`/products/${id}`);
	};

	const handleDeleteProduct = (event, id) => {
		event.stopPropagation();
		dispatch(fetchDeleteProduct(id)).then(() => {
			dispatch(fetchProducts());
		});
	};

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<>
			<BtnCreateProduct />
			<s.MainWrapper>
				<h3>All Products</h3>
				<s.ProductsColumn>
					{products.length &&
						products.map(product => (
							<ProductInfo
								handleOpenProductById={handleOpenProductById}
								handleDeleteProduct={handleDeleteProduct}
								id={product.id}
								key={product.id}
								name={product.name}
							/>
						))}
				</s.ProductsColumn>
			</s.MainWrapper>
		</>
	);
}

export default ProductsPage;
