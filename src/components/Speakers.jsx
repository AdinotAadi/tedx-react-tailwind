import React from "react";
import backgroundImage from "../assets/BGGR.webp";

const Speakers = () => {
	return (
		<div
			className="backdrop h-screen w-screen bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div>Speakers</div>
		</div>
	);
};

export default Speakers;
