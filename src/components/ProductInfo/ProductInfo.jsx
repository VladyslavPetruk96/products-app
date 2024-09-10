import ButtonsEditting from "../ButtonsEditting";
import * as s from "./ProductInfo.styled";
function ProductInfo({ name, handleOpenProductById, id, handleDeleteProduct }) {
	return (
		<s.BorderWrapper onClick={() => handleOpenProductById(id)}>
			<h3>{name}</h3>
			<ButtonsEditting handleDeleteProduct={handleDeleteProduct} id={id} />
		</s.BorderWrapper>
	);
}

export default ProductInfo;
