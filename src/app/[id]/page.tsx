import Button from "@/components/Button";
import Chip from "@/components/Chip";
import Page from "@/components/Page";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";

interface DetailPageProps {
  params: {
    id: string;
  };
}

async function DetailPage({ params }: DetailPageProps) {
  const { data: pokemon }: AxiosResponse<Pokemon> = await axios.get(
    `http://localhost:3000/api/pokemons/${params.id}`
  );

  return (
    <Page size="sm" relative centered>
      <Button href="/" intent="secondary" size="md" outline absolute>
        도감으로 돌아가기
      </Button>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center">
          <div className="w-60 relative aspect-square">
            <Image
              className="object-cover hover:animate-jump"
              src={pokemon.sprites.front_default}
              alt={pokemon.korean_name}
              fill
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-lg font-bold">
              No.{String(pokemon.id).padStart(4, "0")} {pokemon.korean_name}
            </div>
            <div className="text-gray-400">
              {(pokemon.height / 10).toFixed(1)}m{" "}
              {(pokemon.weight / 10).toFixed(1)}
              kg
            </div>
            <div className="flex gap-1">
              {pokemon.types.map((typeObj) => (
                <Chip key={typeObj.type.name} type={typeObj.type.korean_name}>
                  {typeObj.type.korean_name}
                </Chip>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold"># 특성</h3>
          <div className="flex items-center gap-1">
            {pokemon.abilities.map((abilityObj) => (
              <span key={abilityObj.ability.name}>
                {abilityObj.ability.korean_name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold"># 기술</h3>
          <div className="flex flex-wrap gap-1 max-h-60 overflow-auto">
            {pokemon.moves.map((moveObj) => (
              <span key={moveObj.move.name}>{moveObj.move.korean_name}</span>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}

export default DetailPage;
