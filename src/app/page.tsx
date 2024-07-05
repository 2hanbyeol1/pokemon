import Page from "@/components/Page";
import PokemonList from "@/components/PokemonList";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import pikachuImage from "../../public/피카츄.jpeg";

export default async function HomePage() {
  const { data: pokemons }: AxiosResponse<Pokemon[]> = await axios.get(
    "http://localhost:3000/api/pokemons"
  );

  return (
    <Page>
      <div className="fixed top-0 left-0 w-full flex justify-center text-center py-5 mb-5 border-b border-gray-200">
        <h1 className="text-2xl font-bold">포켓몬 도감</h1>
        <Image
          width={60}
          height={60}
          className="object-cover"
          src={pikachuImage}
          alt="피카츄"
        />
      </div>
      <PokemonList pokemons={pokemons} />
    </Page>
  );
}
