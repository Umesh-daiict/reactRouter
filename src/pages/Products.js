import { Link } from 'react-router-dom';

const Products = () => {
	return (
		<section>
			<h1>All Products !!</h1>

			<ul>
				<li>
					<Link to='products/p1'>PRODUCT 1</Link>
				</li>
				<li>
					<Link to='products/p2'>PRODUCT 2 </Link>
				</li>
				<li>
					<Link to='products/p3'>PRODUCT 3</Link>
				</li>
				<li>
					<Link to='products/p4'>PRODUCT 4</Link>
				</li>
			</ul>
		</section>
	);
};
export default Products;
