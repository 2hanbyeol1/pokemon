"use client";
import PokemonCard from "@/components/PokemonCard";
import { useState } from "react";

interface PokemonListProps {
  pokemons: Pokemon[];
}

function PokemonList({ pokemons }: PokemonListProps) {
  const [isClicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <ul className="mt-20 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 justify-items-center gap-3">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          isClicked={isClicked}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
}

export default PokemonList;
