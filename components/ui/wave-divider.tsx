interface WaveDividerProps {
  fill?: string;
  rotate?: boolean;
}

export const WaveDivider = ({
  fill = "#F5F5F0",
  rotate = false,
}: WaveDividerProps) => {
  return (
    <div className={`w-full ${rotate ? "rotate-180" : ""}`}>
      <svg
        className="w-full h-8 md:h-12 lg:h-16"
        style={{ fill: fill }}
        viewBox="0 0 1440 54"
        preserveAspectRatio="none"
      >
        <path d="M0,22L60,25.3C120,29,240,36,360,38.7C480,41,600,41,720,38.7C840,36,960,29,1080,25.3C1200,22,1320,22,1380,22L1440,22L1440,54L1380,54C1320,54,1200,54,1080,54C960,54,840,54,720,54C600,54,480,54,360,54C240,54,120,54,60,54L0,54Z"></path>
      </svg>
    </div>
  );
};
