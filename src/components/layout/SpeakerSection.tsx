import Image from "next/image";
import speakerImage from "@/assets/images/speakerImage.jpeg";

export default function SpeakerSection() {
  return (
    <div className="section-padding">
      <Image
        src={speakerImage}
        alt="Speaker"
        width={1200}
        height={400}
        quality={100}
        priority={true}
        className="w-full h-auto"
      />
    </div>
  );
}
