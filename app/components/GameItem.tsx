import React from 'react';
import { Character } from '@/app/types/games';

interface GameItemProps {
  character: Character;
}

const GameItem: React.FC<GameItemProps> = ({ character }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', width: '200px' }}>
      <img src={character.image.url} alt={character.name} style={{ width: '100%', height: 'auto' }} />
      <h3>{character.name}</h3>
    </div>
  );
};

export default GameItem;
