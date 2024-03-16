import React from 'react';

const Pokemon = ({ pokemon, language }) => {
  const { id, name, type, base, image } = pokemon;
  const displayName = name[language];

  return (
    <div className="pokemon-card">
      <img src={image} alt={`Pokemon ${displayName}`} className="pokemon-image" />
      <div className="pokemon-details">
        <div>[{id}] {displayName}</div>
        <div className="pokemon-types">
        {type.map((type, index) => (
          <span key={index} className="pokemon-type">{type} </span>
        ))}
      </div>
        <div className="pokemon-info">
        <div className="pokemon-info-left">
          <div>HP: {base.HP}</div>
          <div>Attack: {base.Attack}</div>
          <div>Def: {base.Defense}</div>
        </div>
        <div className="pokemon-info-right">
          <div>Sp. Attack: {base['Sp. Attack']}</div>
          <div>Sp. Defense: {base['Sp. Defense']}</div>
          <div>Speed: {base.Speed}</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
