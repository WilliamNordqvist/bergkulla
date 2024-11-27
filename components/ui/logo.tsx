import Image from "next/image";

export const Logo = () => {
  return (
    <div className="h-[90px]">
      <Image
        src="/images/bergkulla-logo.png"
        alt="Bergkulla Stiftelse - Långtidsboende på Åland sedan 1950"
        width={150}
        height={90}
        className="object-contain brightness-[3]"
        priority
      />
    </div>
  );
};
