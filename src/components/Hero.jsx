import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { About } from "./index";

const Hero = () => {
	return (
		<section className="flex flex-col items-center mt-10">
			<div className="flex flex-col gap-2 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
				<p className="text-neutral-600">Turning Vision into</p>
				<p className="pb-4 bg-gradient-to-r from-primary to-[#004d66] text-transparent bg-clip-text">
					Reel-ality!
				</p>
				<p className="mt-6 text-lg text-center text-neutral-500 max-w-4xl">
					At Showoff Media Production, we blend creativity, innovation, and
					expertise to transform your vision into stunning visuals. From concept
					to final cut, we deliver excellence in every frame. Let’s bring your
					brand to life and make magic happen!
				</p>
			</div>
			<div className="flex flex-col lg:flex-row mt-10 justify-center">
				<video
					className="rounded-lg lg:w-1/2 border border-primary shadow mx-2 my-4"
					autoPlay
					loop
					muted
				>
					<source type="video/mp4" src={video1} /> your browser does not support
					mp4 video tpye
				</video>
				<video
					className="rounded-lg lg:w-1/2 border border-primary shadow mx-2 my-4"
					autoPlay
					loop
					muted
				>
					<source type="video/mp4" src={video2} /> your browser does not support
					mp4 video tpye
				</video>
			</div>
			<About />
		</section>
	);
};

export default Hero;
