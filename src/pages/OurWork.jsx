import { ourWork } from "../constants";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const OurWork = () => {
	return (
		<section className="mt-20 max-w-7xl mx-auto tracking-wide">
			<div className="text-center">
				<span className="text-primary bg-base-200 py-2 px-6 rounded-box h-6 text-sm font-medium uppercase">
					Our Work
				</span>
				<h2 className="text-3xl text-center pb-4 sm:text-4xl lg:text-5xl my-6 lg:my-20 tracking-wide bg-gradient-to-r text-transparent bg-clip-text from-primary to-[#004d66]">
					Crafting Visual Masterpieces.
				</h2>
			</div>
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry columnsCount={4}>
					{ourWork.map((work, index) => {
						return (
							<article key={index + 30} className="p-4 md:p-2 lg:p-2 mx-auto">
								<video
									className="rounded-box border border-primary shadow"
									autoPlay
									loop
									muted
								>
									<source type="video/mp4" src={work.video} /> your browser does
									not support mp4 video type
								</video>
								<p className="text-center">{work.description}</p>
							</article>
						);
					})}
				</Masonry>
			</ResponsiveMasonry>
		</section>
	);
};

export default OurWork;
