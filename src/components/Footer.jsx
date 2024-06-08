import { Link } from "react-router-dom";
import { navItems, socialIcons } from "../constants";

const Footer = () => {
	return (
		<footer className="footer sticky top-full mt-20 footer-center p-10 bg-base-200 text-base-content rounded">
			<nav className="grid grid-flow-col gap-4">
				{navItems.map((item, index) => {
					return (
						<Link to={item?.href} key={index + 100}>
							{item?.label}
						</Link>
					);
				})}
			</nav>
			<nav>
				<div className="grid grid-flow-col gap-4">
					{socialIcons.map((icon, index) => {
						return (
							<a
								href={icon.href}
								key={index}
								target={icon.href !== "#" ? "_blank" : "_self"}
								className="text-xl text-secondary"
							>
								{icon.icon}
							</a>
						);
					})}
				</div>
			</nav>
			<aside>
				<p>
					Copyright © {new Date().getFullYear()} - All right reserved by Showoff
					Media Production
				</p>
			</aside>
		</footer>
	);
};

export default Footer;
