import { useState, useEffect } from "react";
import DSC02875HDR1 from '../assets/DSC02875-HDR-1.png';

const heroSlides = [
	{
		id: 1,
		image: DSC02875HDR1,
		title: "Create your space for innovation",
		description:
			"Building a makerspace takes more than just machines. With 10+ years of experience, we help you create spaces that are easy to manage and designed to spark making from day one.",
		showButton: false,
	},
	{
		id: 2,
		image: DSC02875HDR1,
		title: "Apply for membership at Karkhana Dehradun",
		description:
			"Whether you're a builder, designer, student, startup, or curious creator, our memberships give you access to everything you need to bring your ideas to life.",
		showButton: true,
		buttonText: "Apply Now",
	},
];

export default function HeroSection() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
		}, 7500); // Switch every 7.5 seconds

		return () => clearInterval(interval);
	}, []);

	const currentHero = heroSlides[currentSlide];

	return (
		<section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[792px] overflow-hidden mt-[107px]">
			{/* Blue accent line */}
			<div className="absolute top-0 left-0 right-0 h-1 bg-[#2C4ABE] z-10" />

			{/* Background Image */}
			<div className="absolute inset-0">
				<img
					src={currentHero.image}
					alt="Makerspace"
					className="w-full h-full object-cover transition-opacity duration-1000"
					onError={(e) =>
						console.error("Image failed to load:", currentHero.image, e)
					}
				/>
			</div>

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent" />

			{/* Content */}
			<div className="relative z-10 max-w-[1512px] mx-auto px-4 sm:px-6 lg:px-[100px] h-full flex flex-col justify-center">
				<div className="max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[537px]">
					<h1
						className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] leading-tight font-medium text-white mb-4 sm:mb-6"
						style={{ letterSpacing: "-0.02em" }}
					>
						{currentHero.title}
					</h1>
					<p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[32px] leading-relaxed sm:leading-[44px] font-normal text-white mb-6 sm:mb-8">
						{currentHero.description}
					</p>
					{currentHero.showButton && (
						<button className="bg-black text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-medium hover:bg-gray-800 transition-colors">
							{currentHero.buttonText}
						</button>
					)}
				</div>
			</div>

			{/* Carousel Indicators */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
				{heroSlides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className={`w-3 h-3 rounded-full transition-all ${
							index === currentSlide ? "bg-white" : "bg-white/50"
						}`}
					/>
				))}
			</div>
		</section>
	);
}
