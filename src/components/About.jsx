import { aboutUsContent, founders } from "../constants";

const About = () => {
	return (
		<section id="aboutUs" className="max-w-7xl mx-auto mt-20">
			<div className="text-center">
				<span className="text-primary bg-base-200 py-2 px-6 rounded-box h-6 text-sm font-medium uppercase">
					About
				</span>
				<h2 className="text-3xl text-center pb-4 sm:text-4xl lg:text-5xl mt-6 lg:mt-20 tracking-wide bg-gradient-to-r text-transparent bg-clip-text from-primary to-[#004d66]">
					Who we are!
				</h2>
			</div>
			<article className="flex flex-wrap w-full my-5">
				{founders.map((founder, index) => {
					return (
						<section key={index} className="w-full md:w-1/2">
							<div className="card flex-row w-full bg-base-100">
								<figure className="avatar">
									<div className="w-24 rounded-full ml-5">
										<img src={founder.profile} className="w-24 h-24" />
									</div>
								</figure>
								<div className="card-body">
									<h2 className="card-title">{founder.name}</h2>
									<p>{founder.status}</p>
								</div>
							</div>
						</section>
					);
				})}
			</article>
			<article className="text-lg mt-10 text-justify text-neutral-600">
				{aboutUsContent.map((para, index) => {
					return (
						<p className="my-2 text-neutral-600" key={index}>
							{para}
						</p>
					);
				})}
			</article>
		</section>
	);
};

export default About;
