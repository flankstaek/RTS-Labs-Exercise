import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  loadingQuery: null,
  results: [],
  page: 0,
  numberPages: 0,
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase('search/pending', (state, action) => {
      state.query = action.meta.arg;
      state.loadingQuery = true
    })
    .addCase('search/rejected', (state, action) => {
      state.loadingQuery = false
    })
    .addCase('search/fulfilled', (state, action) => {
      state.results = action.payload.hits
      state.numberPages = action.payload.nbPages
      state.loadingQuery = false
    })
    .addCase('changePage', (state, action) => {
      state.page = action.payload
    })
})