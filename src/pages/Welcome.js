import { Link, Outlet } from 'react-router-dom';
const Welcome = () => {
	return (
		<section>
			<h1>Welcome !!</h1>
			<Link to='new-user'>New Here?</Link>
			<Outlet />
		</section>
	);
};
export default Welcome;
