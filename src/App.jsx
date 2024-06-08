import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Landing from "./pages/Landing";
import { SpecialtiesSection, Testimonials } from "./components";
import OurWork from "./pages/OurWork";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Landing />} />
					<Route path="specialties" element={<SpecialtiesSection />} />
					<Route path="testimonials" element={<Testimonials />} />
					<Route path="our-work" element={<OurWork />} />
					<Route path="*" element={<div>Page not Found</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
