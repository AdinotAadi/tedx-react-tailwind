import React from "react";

const Footer = () => {
	return (
		<footer className="flex justify-around items-center h-24 text-white bg-black px-10 w-screen">
			<p className="footerText text-center">
				This independent TEDx event is operated under license from TED.{" "}
				<span> </span>
				<span className="text-red-500 font-bold">
					TED<sup className="text-red-500">x</sup>
				</span>
				<span className="font-bold">XIE, 2024. All Rights Reserved.</span>
			</p>
		</footer>
	);
};

export default Footer;
