import React from "react";
import backgroundImage from "../assets/BGGR.webp";
import prevSpeakers from "../assets/prevSpeakers.webp";
import "./Speakers.css";

const Speakers = () => {
	const speakersData = [
		{
			id: 1,
			name: "Kashish Methwani",
			description: "Miss International India, 2023",
		},
		{
			id: 2,
			name: "Aryan Prajapati",
			description: "Bollywood Child Actor",
		},
		{
			id: 3,
			name: "Prthamesh Jaju",
			description: "Astrophotographer",
		},
		{
			id: 4,
			name: "Shridhar Mankar",
			description: "YouTuber, Educator, Podcaster",
		},
		{
			id: 5,
			name: "Dr. Seema Rao",
			description: "India's first female special forces trainer",
		},
		{
			id: 6,
			name: "Abhijit Chavda",
			description: "Physicist, Podcaster",
		},
		{
			id: 7,
			name: "Adil Ansari",
			description: "Para-archer",
		},
	];
	return (
		<div
			className="speakersSection relative h-fit w-screen bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className="flex flex-col items-center">
				<div className="heroText py-40 text-center font-tek text-white text-5xl">
					<span className="font-tek text-red-500">
						TED<sup>x</sup>
					</span>
					XIE 2023 was a blast!
				</div>
				<div className="flex justify-center items-center h-full">
					<img src={prevSpeakers} alt="Speakers" className="lg:w-1/2" />
				</div>
				<div className="speakers justify-around mt-10">
					{speakersData.map(({ id, name, description }) => (
						<div
							key={id}
							className="speaker bg-gray-500 bg-opacity-40 p-4 rounded-lg text-center mx-2 mb-8"
						>
							<p className="text-white text-lg font-extrabold mb-2">{name}</p>
							<p className="text-white text-sm">{description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Speakers;
