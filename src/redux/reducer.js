import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  loadingQuery: null,
  results: [],
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase('search/pending', (state, action) => {
      state.loadingQuery = true
    })
    .addCase('search/rejected', (state, action) => {
      state.loadingQuery = false
    })
    .addCase('search/fulfilled', (state, action) => {
      state.results = action.payload
      state.loadingQuery = false
    });
})