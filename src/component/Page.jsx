import { Container } from "./Others";
import { PokemonImg } from "./Others";
import { PokemonName } from "./Others";
import { ChoseButton } from "./Others";
import { Chosen } from "./Chosen";
import Pokemonlist from "./Pokemon";
import { Card } from "./Others";
// import { pokemons } from "../pokemon"
import { useState } from "react";
import { useEffect } from "react";

const Pokecard = ({ name, imageUrl, onButtonClick }) => {
  const handleClick = () => {
    onButtonClick(name, imageUrl);
  };
  return (
    <>
      <PokemonName name={name} />
      <PokemonImg url={imageUrl} />
      <ChoseButton onClick={handleClick} />
    </>
  );
};

const Page = () => {
  const [data, setData] = useState([]);

  const [namechosen, setNamechosen] = useState("Pikachu");

  const [img, setImg] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
  );

  const fetchPokemon = async () => {
    try {
      const request = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const res = await request.json();
      const Urlpokelist = res.results.map(async (e) => {
        const fetchpoke = await fetch(e.url);
        const dataJson = await fetchpoke.json();
        // console.log(dataJson);
        return dataJson;
      });
      setData(await Promise.all(Urlpokelist));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);
  console.log(data);

  const handleChosen = (name, imageUrl) => {
    setImg(imageUrl);
    setNamechosen(name);
  };

  return (
    <Container>
      <Chosen>
        <h2 className="font-bold text-xl mb-2 text-center">Sang Terpilih</h2>
        <PokemonImg size="big" url={img} />
        <PokemonName name={namechosen} />
      </Chosen>
      <Pokemonlist>
        {data.map((el) => (
          <Card key={el.id}>
            <Pokecard
              name={el.name}
              imageUrl={el.sprites.other.dream_world.front_default}
              onButtonClick={handleChosen}
            />
          </Card>
        ))}
      </Pokemonlist>
    </Container>
  );
};

export default Page;
