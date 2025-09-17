import Image from "next/image";
import newArrivalsImage from "@/assets/images/newArrivals.jpeg";

export default function NewArrivalsSection() {
  return (
    <div className="section-padding">
      <Image
        src={newArrivalsImage}
        alt="New Arrivals"
        width={1200}
        height={400}
        className="w-full h-auto"
        style={{ color: "white" }}
      />
    </div>
  );
}
