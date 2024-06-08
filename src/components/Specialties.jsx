import { specialties } from "../constants";

const SpecialtiesSection = () => {
	return (
		<section id="specialties" className="max-w-7xl mx-auto mt-20">
			<div className="text-center">
				<span className="text-primary bg-base-200 py-2 px-6 rounded-box h-6 text-sm font-medium uppercase">
					Specialties
				</span>
				<h2 className="text-3xl text-center pb-4 sm:text-4xl lg:text-5xl mt-6 lg:mt-20 tracking-wide bg-gradient-to-r text-transparent bg-clip-text from-primary to-[#004d66]">
					Captivating Narratives, Elevating Brands
				</h2>
			</div>
			<div className="flex flex-wrap mt-10">
				{specialties.map((specialty, index) => {
					return (
						<article
							className="card w-full md:w-1/2 lg:w-1/3 tracking-wide p-4"
							key={index + 10}
						>
							<div className="card-title flex">
								<span className="text-lg text-secondary mx-4 flex items-center justify-center">
									{specialty.icon}
								</span>
								<p>{specialty.title}</p>
							</div>
							<div className="card-body">{specialty.description}</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default SpecialtiesSection;
