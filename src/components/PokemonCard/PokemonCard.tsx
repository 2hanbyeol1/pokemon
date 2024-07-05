import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { toast } from "react-toastify";

interface PokemonCardType {
  pokemon: Pokemon;
  isClicked: boolean;
  handleClick: () => void;
}

type timeoutIdType = string | number | NodeJS.Timeout | undefined;

function PokemonCard({ pokemon, isClicked, handleClick }: PokemonCardType) {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const timeoutId = useRef<timeoutIdType>(undefined);

  const handleCardClick = () => {
    if (isClicked) return;
    handleClick();
    playCryAudio();
    startShaking();
  };

  const playCryAudio = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef?.current?.play();
      timeoutId.current = setTimeout(() => {
        navigateToDetailPage();
        toast.warning("음원이 없거나 길어 자동으로 세부 페이지로 이동합니다");
      }, 2500);
    }
  };

  const startShaking = () => {
    imageRef?.current?.classList.add("animate-shake");
  };

  const handleAudioEnded = () => {
    clearTimeout(timeoutId.current);
    navigateToDetailPage();
  };

  const navigateToDetailPage = () => {
    router.push(`/${pokemon.id}`);
  };

  //
  return (
    <li
      className="group bg-white rounded-lg w-full p-2 hover:shadow-md hover:z-10"
      onClick={handleCardClick}
    >
      <audio ref={audioRef} onEnded={handleAudioEnded}>
        <source src={pokemon.cries.latest} type="audio/ogg" />
      </audio>
      <div className="w-full">
        <div>
          <div className="flex items-center gap-1 ml-1 m">
            <span className="text-sm border mr-1 px-1 border-gray-500 rounded">
              {pokemon.id}
            </span>
            <span className="font-bold">{pokemon.korean_name}</span>
          </div>
          <div className="transition-transform duration-700 group-hover:[transform:perspective(800px)rotateY(180deg)] grid [&>div]:[grid-area:1/1/1/1] [transform-style:preserve-3d] [&>div]:[backface-visibility:hidden]">
            <div className="relative aspect-[3/4]">
              <Image
                ref={imageRef}
                className="object-contain"
                src={pokemon.sprites.back_default}
                alt={pokemon.korean_name}
                fill
              />
            </div>
            <div className="relative aspect-[3/4] [transform:rotateY(180deg)]">
              <Image
                ref={imageRef}
                className="object-contain"
                src={pokemon.sprites.front_default}
                alt={pokemon.korean_name}
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default PokemonCard;
