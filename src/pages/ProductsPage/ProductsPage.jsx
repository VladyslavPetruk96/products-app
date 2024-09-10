import BtnCreateProduct from "../../components/BtnCreateProduct/BtnCreateProduct";
import ProductInfo from "../../components/ProductInfo";
import * as s from "./ProductsPage.styled";
function ProductsPage() {
	return (
		<>
			<BtnCreateProduct />
			<s.MainWrapper>
				<h3>All Products</h3>
				<s.ProductsColumn>
					<ProductInfo />
				</s.ProductsColumn>
			</s.MainWrapper>
		</>
	);
}

export default ProductsPage;
