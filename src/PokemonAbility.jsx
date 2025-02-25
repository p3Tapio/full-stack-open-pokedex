import React from 'react'

const PokemonAbility = ({ abilityName }) => {
  return (
    <div className='pokemon-ability'>
      <div className='pokemon-ability-type'>Hidden ability</div>
      <div className='pokemon-ability-name'>{abilityName}</div>
    </div>
  )
}

export default PokemonAbility
