import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchTerm = createAsyncThunk(
  'search',
  async (query, thunkAPI) => {
    const response = await axios.get('https://hn.algolia.com/api/v1/search?query=' + query)
    return response.data.hits;
  }
)