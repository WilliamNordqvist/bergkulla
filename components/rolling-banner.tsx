"use client";

interface RollingBannerProps {
  text: string;
}

export const RollingBanner = ({ text }: RollingBannerProps) => {
  // Create enough repetitions for smooth scrolling
  const repetitions = 20;

  return (
    <div className="bg-slate-800 text-white py-3 overflow-hidden relative z-50">
      <div
        className="flex animate-banner-scroll"
        style={{
          width: "fit-content",
        }}
      >
        {[...Array(repetitions)].map((_, i) => (
          <span
            key={i}
            className="px-16 text-sm md:text-base font-medium whitespace-nowrap"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};
