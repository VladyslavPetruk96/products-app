import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchItemById } from "../../redux/slices/productsSlice";
import * as s from "./CurrentProduct.styled";

function CurrentProduct() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const product = useSelector(state => state.products.selectedProduct);
	const loading = useSelector(state => state.products.loading);
	useEffect(() => {
		if (id) {
			dispatch(fetchItemById(id));
		}
	}, [dispatch, id]);

	if (loading) return <p>Loading...</p>;

	return (
		<>
			{product && (
				<s.MainWrapper>
					<h3>{product.name}</h3>
					<img
						src={product.imageUrl}
						alt={product.name}
						style={{ width: "200px" }}
					></img>
					<p>Count: {product.count}</p>
					<p>Weight: {product.weight}</p>
					<div>
						Comments:
						{product.comments.length
							? product.comments.map((comment, index) => (
									<li key={index}>{comment}</li>
							  ))
							: "---"}
					</div>
				</s.MainWrapper>
			)}
		</>
	);
}

export default CurrentProduct;
