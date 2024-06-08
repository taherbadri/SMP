import { useState } from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<section
			id="testimonials"
			className="mt-20 max-w-7xl mx-auto tracking-wide"
		>
			<div className="text-center">
				<span className="text-primary bg-base-200 py-2 px-6 rounded-box h-6 text-sm font-medium uppercase">
					Testimonials
				</span>
				<h2 className="text-3xl text-center pb-4 sm:text-4xl lg:text-5xl mt-6 lg:mt-20 tracking-wide bg-gradient-to-r text-transparent bg-clip-text from-primary to-[#004d66]">
					Hear the Buzz from Our Happy Clients!
				</h2>
			</div>
			<div className="flex flex-wrap mt-10 lg:mt-20">
				{testimonials.map((testimony, index) => {
					return (
						<article
							className="card scale-95 hover:scale-100 transition-all card-compact w-full md:w-1/2 lg:w-1/3 tracking-wide shadow"
							key={index + 10}
						>
							<figure className="p-4 image-full">
								<img src={testimony.image} alt={testimony.user} />
							</figure>
							<div className="card-title flex flex-col">
								<p className="text-secondary text-center ">{testimony.user}</p>
								<p className="text-center">{testimony.company}</p>
							</div>
							<div className="card-body">
								<article>
									{isExpanded
										? testimony.text
										: `${testimony.text.slice(0, 53)}...`}
									<button
										className="btn btn-link btn-xs"
										onClick={() => setIsExpanded(!isExpanded)}
									>
										{isExpanded ? "Read Less" : "Read More"}
									</button>
								</article>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Testimonials;
