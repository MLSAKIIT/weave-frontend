import { Button } from "@/components/ui/button";
import Image from "next/image";
import background from "../../../public/background.png";
import reconnect from "../../../public/icons/Connection.png";
import leave from "../../../public/icons/ExitMeeting.png";

export default function ReconnectPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-black relative">
      <Image
        src={background}
        layout="fill"
        objectFit="cover"
        alt="Background"
        className="absolute inset-0 z-0 opacity-50"
      />
      <div className="bg-[#12121E] text-white p-8 rounded-2xl shadow-lg text-center relative z-10 max-w-[400px] w-full mx-4">
        <h2 className="text-2xl font-medium mb-8 leading-snug">
          You have left the
          <br />
          <span className="font-semibold">meeting</span>
        </h2>
        <div className="space-y-4">
          <Button className="w-full bg-[#E8910E] hover:bg-[#d0830d] text-white text-lg font-medium py-6 flex items-center justify-center gap-3 rounded-xl">
            <Image
              src={reconnect}
              width={24}
              height={24}
              alt="Reconnect"
            />
            Reconnect
          </Button>
          <Button 
            variant="outline"
            className="w-full border-2 border-[#E8910E] hover:bg-[#fffffff]  text-black text-lg font-medium py-6 flex items-center justify-center gap-3 rounded-xl"
          >
            <Image
              src={leave}
              width={24}
              height={24}
              alt="Exit Meeting"
            />
            Exit Meeting
          </Button>
        </div>
      </div>
    </div>
  );
}