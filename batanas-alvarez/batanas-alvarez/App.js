import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };
  
  const blastoiseData = {
    name: "blastoise",
    image: require("./assets/blastoise.png"), // Replace with the actual image path
    type: "water",
    hp: 60,
    moves: ["Water Gun, Hydro Cannon"],
    weaknesses: ["grass. electric"],
  };

   const ninetalesData = {
    name: "ninetales",
    image: require("./assets/ninetales.png"),
    type: "Fire",
    hp: 50,
    moves: ["Roar", "Flare"],
    weaknesses: ["rock, water, ground"],
  };

  const  voltorbData = {
    name: "voltorb",
    image: require("./assets/electrobe.png"),
    type: "Electric",
    hp: 60,
    moves: ["Spark", "thunderbolt"],
    weaknesses: ["ground"],
  };

   const ponytaData = {
    name: "ponyta",
    image: require("./assets/ponyta.png"),
    type: "Fire",
    hp: 35,
    moves: ["ember", "fireblast"],
    weaknesses: ["water, ground, rock"],
  };

  const oddishData = {
    name: "Oddish",
    image: require("./assets/oddish.png"),
    type: "Grass",
    hp: 70,
    moves: ["growth", "acid", "sweet scent", "mega drain"],
    weaknesses: ["Fire, ice, flying, psythic"],
  };

   const arcanineData = {
    name: "Arcanine",
    image: require("./assets/arcanine.png"),
    type: "Fire",
    hp: 85,
    moves: ["fire fang", "fire blast"],
    weaknesses: ["water", "ground, rock"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
        <PokemonCard {...blastoiseData} />
        <PokemonCard {...ninetalesData} />
        <PokemonCard {...arcanineData} />
        <PokemonCard {...oddishData} />
        <PokemonCard {...ponytaData} /> 
        <PokemonCard {...voltorbData} /> 
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});