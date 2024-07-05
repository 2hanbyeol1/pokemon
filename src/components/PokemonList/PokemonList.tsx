"use client";
import PokemonCard from "../PokemonCard";

interface PokemonListProps {
  pokemons: Pokemon[];
}

function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <li className="mt-28 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 justify-items-center gap-3">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </li>
  );
}

export default PokemonList;
