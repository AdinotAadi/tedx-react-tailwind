import React from "react";
import "./Info.css";

const Info = () => {
	return (
		<div className="info flex flex-col p-20 text-white text-justify">
			<div className="QA mb-8">
				<p className="question text-red-500 font-bold">What is TEDx?</p>
				<p className="answer">
					In the spirit of ideas worth spreading, TED has created a program
					called TEDx. TEDx is a program of local, self-organized events that
					bring people together to share a TED-like experience. Our event is
					called TEDxXIE, where x = independently organized TED event. At our
					TEDxXIE event, TEDTalks video and live speakers will combine to spark
					deep discussion and connection in a small group. The TED Conference
					provides general guidance for the TEDx program, but individual TEDx
					events, including ours, are self-organized.
				</p>
			</div>
			<div className="QA mb-8">
				<p className="question text-red-500 font-bold">
					Want to be our partner?
				</p>
				<p className="answer">
					We are thrilled to invite partners on board. Please reach out to us at
					<span> </span>
					<a
						className="contactEmail font-bold hover:text-red-500 text-white transition duration-200"
						href="mailto:tedxxie@xavier.ac.in"
					>
						tedxxie@xavier.ac.in
					</a>
				</p>
			</div>
		</div>
	);
};

export default Info;
