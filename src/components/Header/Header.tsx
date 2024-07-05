import Image from "next/image";
import trainerMImage from "../../../public/trainer-m.png";
import trainerWImage from "../../../public/trainer-w.png";

function Header() {
  return (
    <div className="bg-white z-50 fixed top-0 left-0 w-full flex items-center justify-center text-center py-3 border-b border-gray-200">
      <Image
        width={40}
        height={40}
        className="object-cover"
        src={trainerMImage}
        alt="트레이너(남)"
      />
      <h1 className="text-2xl font-bold mx-2">포켓몬 도감</h1>
      <Image
        width={40}
        height={40}
        className="object-cover"
        src={trainerWImage}
        alt="트레이너(여)"
      />
    </div>
  );
}

export default Header;
