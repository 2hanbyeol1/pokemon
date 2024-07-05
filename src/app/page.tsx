"use client";
import Page from "@/components/Page";
import PokemonList from "@/components/PokemonList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import pikachuImage from "../../public/pikachu.jpeg";
import ErrorPage from "./error";
import LoadingPage from "./loading";

export default function HomePage() {
  const {
    isPending,
    error,
    data: pokemons,
  } = useQuery<Pokemon[]>({
    queryKey: ["pokemon", { list: true }],
    queryFn: () =>
      axios.get("http://localhost:3000/api/pokemons").then((res) => res.data),
  });

  if (isPending) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <Page>
      <div className="bg-white z-50 fixed top-0 left-0 w-full flex justify-center text-center py-3 border-b border-gray-200">
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
