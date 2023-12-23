import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import tedxLogo from "../assets/tedx-logo-white.png";
import "./NavBar.css";

const NavBar = () => {
	const [nav, setNav] = useState(false);

	const links = [
		{
			id: 1,
			link: "speakers",
			text: "Speakers",
		},
		{
			id: 2,
			link: "schedule",
			text: "Schedule",
		},
		{
			id: 3,
			link: "partners",
			text: "Partners",
		},
		{
			id: 4,
			link: "view",
			text: "View Highlights",
		},
	];

	return (
		<div className="flex justify-between items-center w-full h-20 px-4 bg-black fixed">
			<div>
				<img src={tedxLogo} className="logo" alt="TEDx Logo" />
			</div>
			<ul className="hidden md:flex">
				{links.map(({ id, link, text }) => (
					<li
						key={id}
						className="px-4 cursor-pointer capitalize text-gray-500 hover:scale-110 hover:text-white duration-200"
					>
						<Link to={link} smooth duration={500}>
							{text}
						</Link>
					</li>
				))}
			</ul>
			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>
			{nav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-gray-500">
					{links.map(({ id, link, text }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-5 text-4xl"
						>
							<Link
								onClick={() => setNav(!nav)}
								to={link}
								smooth
								duration={500}
							>
								{text}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default NavBar;
