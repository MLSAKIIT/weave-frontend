import Image from "next/image";

interface AboutUsCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

const AboutUsCard: React.FC<AboutUsCardProps> = ({ title, description, iconSrc }) => {
  return (
    <div className="bg-[hsla(229,41%,11%,0.6)] text-orange-400 rounded-xl p-6 md:p-8 shadow-lg relative w-full max-w-md md:max-w-md">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {/* Description */}
      <p className="text-orange-300 text-md leading-relaxed">{description}</p>

      {/* Icon */}
      <div className="absolute -top-6 right-4 bg-orange-500 rounded-full p-2 shadow-md">
        <Image src={iconSrc} alt="Icon" width={40} height={40} />
      </div>
    </div>
  );
};

export default AboutUsCard;
