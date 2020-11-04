import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, searchTerm } from '../../redux/actions';

import styles from './PageChanger.module.css';

export default function PageChanger() {

  const dispatch = useDispatch();

  const query = useSelector(state=>state.query);
  const page = useSelector(state=>state.page);
  const numberPages = useSelector(state=>state.numberPages);

  const updatePage = (pageNumber) => {
    dispatch(changePage(pageNumber))
    dispatch(searchTerm(query))
  }

  return (
    <div className={styles.pageChanger}>
      <button disabled={page <= 0} onClick={() => updatePage(page-1)}>{"<"}</button>
      {page}
      <button disabled={page >= numberPages } onClick={() => updatePage(page+1)}>{">"}</button>
    </div>
  );
}