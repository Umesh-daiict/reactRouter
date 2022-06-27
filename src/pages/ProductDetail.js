import { useParams } from 'react-router-dom';
const ProductDetail = () => {
	const params = useParams();

	return <h1>{params.id} - Product Detail !! </h1>;
};
export default ProductDetail;
