import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEvent, useRef } from "react";

interface PokemonCardType {
  pokemon: Pokemon;
}

function PokemonCard({ pokemon }: PokemonCardType) {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleCardClick = (e: MouseEvent<HTMLUListElement>) => {
    playCryAudio();
    startShaking();
  };

  const playCryAudio = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef?.current?.play();
    }
  };

  const startShaking = () => {
    imageRef?.current?.classList.add("animate-shake");
  };

  const navigateToDetailPage = () => {
    router.push(`/${pokemon.id}`);
  };

  //
  return (
    <ul
      className="group bg-white rounded-lg w-full p-2 hover:shadow-md hover:z-10"
      onClick={handleCardClick}
    >
      <audio ref={audioRef} onEnded={navigateToDetailPage}>
        <source src={pokemon.cries.legacy} type="audio/ogg" />
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
        <div></div>
      </div>
    </ul>
  );
}

export default PokemonCard;
