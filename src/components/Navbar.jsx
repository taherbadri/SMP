import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems, socialIcons } from "../constants";
import { Link } from "react-router-dom";
const Navbar = () => {
	const [isOpenOnMobile, setIsOpenOnMobile] = useState(false);
	const [navbarHeight, setNavbarHeight] = useState(0);

	const toggleNavbar = () => {
		setIsOpenOnMobile(!isOpenOnMobile);
	};

	const navbar = useRef(null);
	const isMounted = useRef(false);
	useEffect(() => {
		if (isMounted.current) {
			setNavbarHeight(() => navbar.current.offsetHeight);
		}
		isMounted.current = true;
	}, [isOpenOnMobile, navbarHeight]);

	return (
		<nav className="sticky top-0 z-50 shadow bg-base-100" ref={navbar}>
			<div className="navbar px-4 lg:px-8 text-sm relative">
				<div className="navbar-start">
					<article className="px-4 lg:px-0 flex items-center gap-2 justify-center">
						<img
							className="h-10 w-10 rounded-full"
							src={logo}
							alt="showoff media production"
						/>
						<Link
							to={"/"}
							className="text-lg tracking-tight text-nowrap bg-gradient-to-r bg-clip-text text-transparent from-[#004d66] to-primary"
						>
							Showoff Media Productions
						</Link>
					</article>
				</div>
				<div className="navbar-center items-center justify-center hidden lg:flex ml-14 space-x-12">
					<ul className="menu menu-horizontal">
						{navItems.map((item, index) => {
							return (
								<li key={index + 100}>
									{
										<Link
											to={item?.href}
											className={(isActive) => {
												isActive ? "btn btn-ghost active" : "btn btn-ghost";
											}}
										>
											{item?.label}
										</Link>
									}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="navbar-end">
					<ul className="menu menu-horizontal hidden lg:flex">
						{socialIcons.map((icon, index) => {
							return (
								<li key={index}>
									<a
										href={icon.href}
										target="_blank"
										className="text-xl text-secondary hover:bg-secondary hover:text-secondary-content"
									>
										{icon.icon}
									</a>
								</li>
							);
						})}
					</ul>
					<div className="lg:hidden md:flex flex-col justify-end">
						<button
							className="btn btn-ghost btn-circle btn-sm"
							onClick={toggleNavbar}
						>
							{isOpenOnMobile ? <X /> : <Menu />}
						</button>
					</div>
				</div>
				{isOpenOnMobile && (
					<div
						className={`fixed right-0 z-20 ${
							navbarHeight !== 0 ? `top-[${navbarHeight}px]` : "top-[64px]"
						} w-full flex flex-col transition-all justify-center items-center shadow-lg bg-base-100 lg:hidden`}
					>
						<ul className="menu menu-vertical items-center">
							{navItems.map((item, index) => {
								return (
									<li key={index + 100}>
										{
											<Link
												to={item?.href}
												className={(isActive) => {
													isActive ? "btn btn-ghost active" : "btn btn-ghost";
												}}
											>
												{item?.label}
											</Link>
										}
									</li>
								);
							})}
						</ul>
						<ul className="menu menu-horizontal w-full flex items-center justify-center">
							{socialIcons.map((icon, index) => {
								return (
									<li key={index}>
										<a
											href={icon.href}
											target={icon.href !== "#" ? "_blank" : "_self"}
											className="text-xl text-secondary hover:bg-secondary hover:text-secondary-content"
										>
											{icon.icon}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
