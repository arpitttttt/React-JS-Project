import React from 'react';
import SectionItem from './SectionItem';
import SectionItemList from './SectionItemList';
import FavouriteIndicator from './FavouriteIndicator';
import './PokemonData.scss';

function PokemonData({ pokemon }) {
  return (
    <article>
      <section className="heading">
        <span className="capitalize">{pokemon.name}</span>
        <FavouriteIndicator pokemon={pokemon} />
      </section>
      <section>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </section>
      <SectionItem title="ID" data={pokemon.id} />
      <SectionItem title="Base Experience" data={pokemon.base_experience} />
      <SectionItemList title="Type" propName="type" data={pokemon.types} />
      {
        pokemon.stats.map((data) => (
          <SectionItem title={data.stat.name} data={data.base_stat} key={data.stat.name} />
        ))
      }
      <SectionItemList title="Abilities" propName="ability" data={pokemon.abilities} />
      <SectionItemList title="Moves" propName="move" data={pokemon.moves} />
      <SectionItem title="Weight" data={pokemon.weight} />
      <SectionItem title="Height" data={pokemon.height} />
    </article>
  );
}

export default PokemonData;
