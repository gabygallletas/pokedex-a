import { useEffect, useState } from "react";
import { View } from "react-native";
import PokemonCard from "../components/PokemonCard";

interface Pokemon {
  name: string;
  url: string;
}

export default function Index() {

  const [results, setResults] = useState<Pokemon[]>([]);

  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

      const response = await fetch(URL);
      const data = await response.json();

      console.log(data.results);

      setResults(data.results);

    } catch (error) {
      console.log("Error al obtener pokemons", error);
    }
  };
return (
  <View>
    {results?.map((item) => {
      return (
        <PokemonCard
          key={item.name}
          name={item.name}
          url={item.url}
        />
      );
    })}
  </View>
);
}