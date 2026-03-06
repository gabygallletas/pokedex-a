import { Image, Text, View } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard({ name, url }: PokemonCardProps) {

  const getPokemonId = () => {
    const parts = url.split("/").filter(Boolean);
    return parts.pop();
  };

  const id = getPokemonId();

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <View>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{name}</Text>
    </View>
  );
}