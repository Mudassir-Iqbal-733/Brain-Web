import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FiArrowRight } from "react-icons/fi";

import Hero1 from "../assets/Hero1.jpg";
import Hero2 from "../assets/Hero2.jpg";
import Hero3 from "../assets/Hero3.jpg";

const slides = [
  {
    image: Hero1,
    eyebrow: "BRAIN SOFTWARE COMPANY PVT LTD",
    title: "Brain Inspire System of Education",
    description:
      "Empowering students with modern education, practical skills, and the confidence to build a successful future.",
  },
  {
    image: Hero2,
    eyebrow: "LEARN. GROW. SUCCEED.",
    title: "Learn Skills That Shape Your Future",
    description:
      "Discover quality education and practical learning designed to prepare you for today's technology-driven world.",
  },
  {
    image: Hero3,
    eyebrow: "YOUR FUTURE STARTS HERE",
    title: "Turn Your Potential Into Success",
    description:
      "Build your knowledge, develop valuable skills, and take the next step toward your professional journey.",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative pl-0">
              <div className="relative flex w-full flex-col lg:min-h-[590px] lg:flex-row">
                
                <div className="relative flex min-h-[430px] w-full items-center overflow-visible bg-gradient-to-br from-cyan-50 via-white to-white px-6 py-14 sm:px-10 sm:py-16 lg:min-h-[590px] lg:w-1/2 lg:px-16 xl:px-20">
                  
                  <div className="relative z-10 max-w-xl">
                    <span className="mb-5 block text-xs font-bold uppercase tracking-[0.18em] text-[#0d9488] sm:text-sm">
                      {slide.eyebrow}
                    </span>

                    <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-[64px]">
                      {slide.title}
                    </h1>

                    <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
                      {slide.description}
                    </p>

                    <a
                      href="/programs"
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0d9488] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-900/20 transition-all duration-300 hover:bg-[#0f766e] hover:shadow-xl"
                    >
                      Explore Services
                      <FiArrowRight size={18} />
                    </a>
                  </div>

                  <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-100/50 blur-3xl" />

                  <CarouselPrevious
                    className="
                      absolute
                      left-4
                      top-auto
                      bottom-0
                      z-50
                      flex
                      h-10
                      w-10
                      translate-y-1/2
                      border-none
                      bg-white
                      text-slate-700
                      shadow-lg
                      hover:bg-[#0d9488]
                      hover:text-white
                      sm:left-6
                      sm:h-11
                      sm:w-11
                      lg:hidden
                    "
                  />

                  <CarouselNext
                    className="
                      absolute
                      right-4
                      top-auto
                      bottom-0
                      z-50
                      flex
                      h-10
                      w-10
                      translate-y-1/2
                      border-none
                      bg-white
                      text-slate-700
                      shadow-lg
                      hover:bg-[#0d9488]
                      hover:text-white
                      sm:right-6
                      sm:h-11
                      sm:w-11
                      lg:hidden
                    "
                  />
                </div>

                <div className="relative min-h-[330px] w-full lg:min-h-[590px] lg:w-1/2">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/10" />
                </div>

                <CarouselPrevious
                  className="
                    absolute
                    left-5
                    top-1/2
                    z-30
                    hidden
                    h-11
                    w-11
                    -translate-y-1/2
                    border-none
                    bg-white
                    text-slate-700
                    shadow-lg
                    hover:bg-[#0d9488]
                    hover:text-white
                    lg:flex
                  "
                />

                <CarouselNext
                  className="
                    absolute
                    right-5
                    top-1/2
                    z-30
                    hidden
                    h-11
                    w-11
                    -translate-y-1/2
                    border-none
                    bg-white
                    text-slate-700
                    shadow-lg
                    hover:bg-[#0d9488]
                    hover:text-white
                    lg:flex
                  "
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default HeroSlider;