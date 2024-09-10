import * as s from "./CurrentProduct.styled";
function CurrentProduct() {
	return (
		<s.MainWrapper>
			<h3>Name</h3>
			<img
				src="https://cms.imgworlds.com/assets/9558de9d-1e49-437e-aa7b-b8bd4d999b00.jpg?key=home-gallery"
				style={{ width: "200px" }}
			></img>
			<p>Count: 10</p>
			<p>Weight: 100g</p>
			<div>
				Comments:
				<li>comments 1</li>
				<li>comments 2</li>
			</div>
		</s.MainWrapper>
	);
}

export default CurrentProduct;
