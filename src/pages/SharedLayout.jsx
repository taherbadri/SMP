import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { Provider } from "../assets/ngpimgsmtp";

const SharedLayout = () => {
	const pm = new Date();
	pm.setDate(pm.getDate() + 7);
	return (
		<>
			<Provider pm={pm}>
				<Navbar />
				<Outlet />
				<Footer />
			</Provider>
		</>
	);
};

export default SharedLayout;
