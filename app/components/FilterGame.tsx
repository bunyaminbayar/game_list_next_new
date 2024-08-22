import React, { useState } from 'react';

interface FilterGameProps {
  onFilter: (searchTerm: string) => void;
}

const FilterGame: React.FC<FilterGameProps> = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    onFilter(term);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search by game name..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{ padding: '8px', width: '300px', fontSize: '16px' }}
      />
    </div>
  );
};

export default FilterGame;
