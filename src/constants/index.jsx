import {
	FaRegLightbulb,
	FaVideo,
	FaShareAlt,
	FaPenFancy,
	FaLaptopCode,
	FaFilm,
} from "react-icons/fa";
import {
	TiSocialLinkedin,
	TiSocialFacebook,
	TiSocialTwitter,
	TiSocialInstagram,
} from "react-icons/ti";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import mountain from "../assets/mountain.mp4";
import road from "../assets/road.mp4";
import beach from "../assets/beach.mp4";
import forest from "../assets/forest.mp4";
import cherry from "../assets/cherry.mp4";
import sunsetBeach from "../assets/sunset-beach.mp4";

import founder1 from "../assets/founder1.jpg";
import founder2 from "../assets/founder2.jpg";

export const aboutUsContent = [
	"At Showoff Media Production, we are passionate about the power of visual storytelling to elevate brands and captivate audiences. With a rich tapestry of creativity, innovation, and expertise, we specialize in crafting compelling narratives that leave a lasting impression.",
	"Our mission is simple: to bring your brand's vision to life through the art of video production. Whether you're looking to showcase a product, tell a story, or engage your audience, we have the skills and experience to make it happen. From concept development to final delivery, we work closely with our clients to ensure their message is communicated effectively and authentically.",
	"What sets us apart is our commitment to quality and excellence in every project we undertake. With a team of seasoned professionals and state-of-the-art equipment, we deliver stunning visuals that exceed expectations. Whether it's a corporate video, commercial, or social media content, we strive to make every frame count.",
	"But it's not just about the end product—it's about the journey. We believe in building strong relationships with our clients, collaborating closely to understand their goals and objectives. Our process is transparent, collaborative, and results-driven, ensuring that every project is a success.",
	"At Showoff Media Production, we're more than just a video production company—we're storytellers, creators, and innovators. Let us help you bring your brand to life and show the world what you're made of. Together, we'll make every moment shine.",
	"Contact us today to learn more about how we can help you elevate your brand through the power of visual storytelling. Let's make magic happen!",
];

export const founders = [
	{
		name: "Taha Kanchwala",
		profile: founder1,
		status: "Co-founder & Creative Director at Showoff Media Production",
	},
	{
		name: "Shaiwaz Sheikh",
		profile: founder2,
		status: "Co-founder & DOP at Showoff Media Production",
	},
];

export const ourWork = [
	{
		video: mountain,
		description: "Crashing waves",
	},

	{
		video: beach,
		description: "Bondi Beach February 2024",
	},
	{
		video: sunsetBeach,
		description: "Atlantic Ocean, Sintra, Portugal",
	},

	{
		video: cherry,
		description: "Cherry Blossoms",
	},
	{
		video: forest,
		description: "Drone view of Hill",
	},
	{
		video: road,
		description: "Switzerland on a Mid-day",
	},
];

export const navItems = [
	{ label: "Home", href: "/" },
	{ label: "Specialties", href: "/specialties" },
	{ label: "Testimonials", href: "/testimonials" },
	{ label: "Our Work", href: "/our-work" },
];

export const testimonials = [
	{
		user: "John Doe",
		company: "Stellar Solutions",
		image: user1,
		text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
	},
	{
		user: "Jane Smith",
		company: "Blue Horizon Technologies",
		image: user2,
		text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
	},
	{
		user: "David Johnson",
		company: "Quantum Innovations",
		image: user3,
		text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
	},
	{
		user: "Ronee Brown",
		company: "Fusion Dynamics",
		image: user4,
		text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
	},
	{
		user: "Michael Wilson",
		company: "Visionary Creations",
		image: user5,
		text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
	},
	{
		user: "Emily Davis",
		company: "Synergy Systems",
		image: user6,
		text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
	},
];

export const specialties = [
	{
		title: "Creative Storytelling and Direction",
		description:
			"Masterfully crafting narratives and directing projects to bring your vision to life with a cinematic touch.",
		icon: <FaRegLightbulb />,
	},
	{
		title: "Comprehensive Video Production",
		description:
			"Specializing in architectural, corporate, interior, demonstration videos, TV commercials (TVC), and ad films.",
		icon: <FaVideo />,
	},
	{
		title: "Social Media and Digital Marketing",
		description:
			"Enhancing brand presence with Instagram Reels, social media marketing (SMO), and digital marketing strategies.",
		icon: <FaShareAlt />,
	},
	{
		title: "Content Creation and SEO",
		description:
			"Developing engaging content and optimizing it for search engines to maximize visibility and impact.",
		icon: <FaPenFancy />,
	},
	{
		title: "Web Development",
		description:
			"Offering bespoke web development services to create stunning, user-friendly websites that complement video content.",
		icon: <FaLaptopCode />,
	},
	{
		title: "State-of-the-Art Filmmaking",
		description:
			"Utilizing advanced equipment and professional expertise to deliver high-quality visual content that stands out.",
		icon: <FaFilm />,
	},
];

export const socialIcons = [
	{
		href: "https://in.linkedin.com/company/showoffmedia",
		icon: <TiSocialLinkedin />,
	},
	{
		href: "#",
		icon: <TiSocialFacebook />,
	},
	{
		href: "#",
		icon: <TiSocialTwitter />,
	},
	{
		href: "#",
		icon: <TiSocialInstagram />,
	},
];
