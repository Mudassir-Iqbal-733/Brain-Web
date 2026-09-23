import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(percentage);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[99999]">
      <div
        className="h-[3px] rounded-r-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-[#0d9488] shadow-[0_0_8px_rgba(34,211,238,0.95),0_0_18px_rgba(13,148,136,0.8)] transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

export default ScrollProgress;