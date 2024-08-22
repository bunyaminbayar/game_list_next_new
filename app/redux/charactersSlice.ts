import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CharacterState, Character } from '@/app/types/games';

const initialState: CharacterState = {
  list: [],
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    const response = await fetch('http://localhost:3000/data/mock.json');
    const data = await response.json();
    return data.characters as Character[];
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default charactersSlice.reducer;
