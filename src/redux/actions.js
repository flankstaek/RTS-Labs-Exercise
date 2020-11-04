import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchTerm = createAsyncThunk(
  'search',
  async (query, thunkAPI) => {
    const page = thunkAPI.getState().page;
    const response = await axios.get('https://hn.algolia.com/api/v1/search?query=' + query + '&page=' + page)
    return response.data;
  }
)

export const changePage = createAction('changePage')