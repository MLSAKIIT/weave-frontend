import Image from "next/image";

export default function Footer() {
  const icons = [
    {
      src: "/icons/footer-icon-4.png",
      to: "https://www.instagram.com/mlsakiit/?hl=en",
    },
    {
      src: "/icons/footer-icon-3.png",
      to: "https://in.linkedin.com/company/msckiit",
    },
    {
      src: "/icons/footer-icon-2.png",
      to: "https://www.youtube.com/channel/UCIQVsJQTeBs_MC685RidK2w",
    },
    { src: "/icons/footer-icon-1.png", to: "https://github.com/MLSAKIIT" },
  ];

  return (
    <div className="footer text-center py-6 bg-[#101426] text-[#E76F04]">
      <h1 className="text-xl font-semibold mb-4">Our Social Media Handles</h1>

      <div className="flex justify-center gap-5 my-20">
        {icons.map((e, i) => (
          <div
            className="icon w-10 h-10 rounded-full flex items-center justify-center xl:mx-20"
            key={i}
          >
            <a href={e.to} target="_blank">
              <Image
                src={e.src}
                alt={`Social Icon ${i + 1}`}
                width={40}
                height={40}
                className=""
              />
            </a>
          </div>
        ))}
      </div>

      <p className="text-sm">Copyright by MLSA project wing 2025</p>
    </div>
  );
}
