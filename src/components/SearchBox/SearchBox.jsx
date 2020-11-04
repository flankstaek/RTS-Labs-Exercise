import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchTerm } from '../../redux/actions';

import styles from './SearchBox.module.css';

export default function Searchbox(){

  const dispatch = useDispatch();

  const loadingQuery = useSelector(state=>state.loadingQuery);
  
  const submitForm = (event) => {
    event.preventDefault();
    dispatch(searchTerm(event.target.query.value));
  };

  return (
    <div className={styles.searchBox}>
      <form className={styles.form} onSubmit={submitForm} >
        <input type="text" name="query" placeholder="Enter search term" disabled={loadingQuery}></input>
        <input type="submit" value="Search" disabled={loadingQuery}></input>
      </form>
    </div>
  )
}