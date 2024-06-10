import { Link } from "react-router-dom";
import { navItems, socialIcons } from "../constants";

const Footer = () => {
	return (
		<footer className="footer sticky top-full mt-20 footer-center p-10 pb-3 bg-base-200 text-base-content rounded">
			<nav className="grid grid-flow-col gap-4">
				{navItems.map((item, index) => (
					<Link to={item?.href} key={index + 100}>
						{item?.label}
					</Link>
				))}
			</nav>
			<nav>
				<div className="grid grid-flow-col gap-4">
					{socialIcons.map((icon, index) => (
						<a
							href={icon.href}
							key={index}
							target={icon.href !== "#" ? "_blank" : "_self"}
							className="text-xl text-secondary"
						>
							{icon.icon}
						</a>
					))}
				</div>
			</nav>
			<aside>
				<p>
					Copyright © {new Date().getFullYear()} - All rights reserved by
					Showoff Media Production
				</p>
			</aside>
			<article>
				<p className="text-xs text-gray-500">
					Made by{" "}
					<a
						href="https://www.linkedin.com/in/taherbadri/"
						target="_blank"
						className="text-secondary"
					>
						Taher Badri
					</a>
				</p>
			</article>
		</footer>
	);
};

export default Footer;
