"use client";
import Header from "@/components/Header";
import Page from "@/components/Page";
import PokemonList from "@/components/PokemonList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
      <Header />
      <PokemonList pokemons={pokemons} />
    </Page>
  );
}
