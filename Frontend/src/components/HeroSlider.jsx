import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FiArrowRight } from "react-icons/fi";

import Hero1 from "../assets/Hero1.jpeg";
import Hero2 from "../assets/Hero2.jpeg";
import Hero3 from "../assets/Hero3.jpeg";
import Hero4 from "../assets/Hero4.jpeg";
import Hero5 from "../assets/Hero5.jpeg";
import Hero6 from "../assets/Hero6.jpeg";

const slides = [
  {
    image: Hero1,
    eyebrow: "SHAPING THE FUTURE OF HEALTHCARE",
    title: "Become a Healthcare Professional",
    description:
      "Build the knowledge, skills, and confidence you need to make a meaningful difference in healthcare.",
  },
  {
    image: Hero2,
    eyebrow: "MODERN LEARNING ENVIRONMENT",
    title: "Learn Through Practical Education",
    description:
      "Develop practical skills through modern facilities and a learning environment designed for professional growth.",
  },
  {
    image: Hero3,
    eyebrow: "WELCOME TO AIRS",
    title: "Agile Institute of Rehabilitation Sciences",
    description:
      "A professional learning environment dedicated to quality education in rehabilitation sciences.",
  },
  {
    image: Hero4,
    eyebrow: "QUALITY EDUCATION",
    title: "Learn, Grow and Build Your Future",
    description:
      "Gain professional knowledge and practical skills with dedicated faculty and a supportive learning environment.",
  },
  {
    image: Hero5,
    eyebrow: "A BETTER WAY TO LEARN",
    title: "Education That Prepares You for Tomorrow",
    description:
      "Experience a modern educational environment focused on learning, professional development, and student success.",
  },
  {
    image: Hero6,
    eyebrow: "EXCELLENCE & ACHIEVEMENT",
    title: "Discover Opportunities at AIRS",
    description:
      "Join AIRS and take the next step toward a rewarding career in rehabilitation sciences.",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative h-[calc(100vh-144px)] min-h-[520px] w-full overflow-hidden bg-white">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        className="h-full w-full"
      >
        <CarouselContent className="ml-0 h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full pl-0">
              <div className="relative flex h-[calc(100vh-144px)] min-h-[520px] w-full flex-col lg:flex-row">
                <div className="relative flex h-[55%] w-full items-center overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-white px-6 py-8 sm:px-10 lg:h-full lg:w-1/2 lg:px-12 xl:px-16">
                  <div className="relative z-10 max-w-xl">
                    <span className="mb-4 block text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488] sm:text-sm">
                      {slide.eyebrow}
                    </span>

                    <h1 className="max-w-xl text-3xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                      {slide.title}
                    </h1>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
                      {slide.description}
                    </p>

                    <a
                      href="/programs"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0d9488] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/20 transition-all duration-300 hover:bg-[#0f766e] hover:shadow-xl"
                    >
                      Explore Programs
                      <FiArrowRight size={18} />
                    </a>
                  </div>

                  <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-100/50 blur-3xl" />

                  <CarouselPrevious className="absolute bottom-3 left-4 top-auto z-50 flex h-9 w-9 border-none bg-white text-slate-700 shadow-lg hover:bg-[#0d9488] hover:text-white sm:left-6 lg:hidden" />

                  <CarouselNext className="absolute bottom-3 right-4 top-auto z-50 flex h-9 w-9 border-none bg-white text-slate-700 shadow-lg hover:bg-[#0d9488] hover:text-white sm:right-6 lg:hidden" />
                </div>

                <div className="relative h-[45%] w-full overflow-hidden bg-slate-50 lg:h-full lg:w-1/2">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 h-full w-full ${
                      index === 0
                        ? "object-contain"
                        : "object-cover"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/10" />
                </div>

                <CarouselPrevious className="absolute left-5 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 border-none bg-white text-slate-700 shadow-lg hover:bg-[#0d9488] hover:text-white lg:flex" />

                <CarouselNext className="absolute right-5 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 border-none bg-white text-slate-700 shadow-lg hover:bg-[#0d9488] hover:text-white lg:flex" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default HeroSlider;