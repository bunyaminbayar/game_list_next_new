import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '@/app/redux/charactersSlice';
import { RootState } from '@/app/redux/store';
import GameItem from './GameItem';
import FilterGame from './FilterGame';

const GameList: React.FC = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state: RootState) => state.characters.list);
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCharacters(characters);
  }, [characters]);

  const handleFilter = (searchTerm: string) => {
    if (searchTerm) {
      const filtered = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCharacters(filtered);
    } else {
      setFilteredCharacters(characters);
    }
  };

  return (
    <div>
      <FilterGame onFilter={handleFilter} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCharacters.map((character) => (
          <GameItem key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default GameList;
