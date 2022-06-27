import { Link, Route } from 'react-router-dom';
const Welcome = () => {
	return (
		<section>
			<h1>Welcome !!</h1>
			<Route path='/welcome/new-user'>
				<p>welcome, New User</p>
			</Route>
			<Link to='welcome/new-user'>New Here?</Link>
		</section>
	);
};
export default Welcome;
