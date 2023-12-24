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
			link: "speakersSection",
			text: "Speakers",
		},
		{
			id: 2,
			link: "scheduleSection",
			text: "Schedule",
		},
		{
			id: 3,
			link: "partnersSection",
			text: "Partners",
		},
	];

	return (
		<div className="flex justify-between items-center w-screen h-20 px-4 bg-black fixed lg:px-60 z-10 font-int">
			<div>
				<img src={tedxLogo} className="logo" alt="TEDx Logo" />
			</div>
			<ul className="hidden md:flex">
				{links.map(({ id, link, text }) => (
					<li
						key={id}
						className="px-4 cursor-pointer capitalize text-white hover:text-red-400 duration-200"
					>
						<Link to={link} smooth duration={200}>
							{text}
						</Link>
					</li>
				))}
				<li className="px-4 cursor-pointer highlightsBtn">
					<a
						href="https://www.instagram.com/tedxxie/"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Highlights
					</a>
				</li>
			</ul>
			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>
			{nav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen bg-black text-white">
					{links.map(({ id, link, text }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-5 text-4xl"
						>
							<Link
								onClick={() => setNav(!nav)}
								to={link}
								smooth
								duration={200}
							>
								{text}
							</Link>
						</li>
					))}
					<li className="px-4 py-4 cursor-pointer highlightsBtn font-int text-2xl">
						<a
							href="https://www.instagram.com/tedxxie/"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Highlights
						</a>
					</li>
				</ul>
			)}
		</div>
	);
};

export default NavBar;
