import React from 'react';
import { useSelector } from 'react-redux';

import styles from './ResultsList.module.css';

export default function ResultsList(){

  const results = useSelector(state=>state.results)

  return (
    <div className={styles.results}>
      {results.map((r) => <Result {...r} key={r.objectID} />)}
    </div>
  )
}

function Result(props) {
  if(props.title) {
    return (
      <div className={styles.result} href={props.url}>
        <a className={styles.title} href={props.url}>{props.title}</a>
        <div className={styles.seperator}>--</div>
        <a className={styles.url} href={props.url}>{props.url}</a>
      </div>
    )
  }
  else {
    return (
      <div className={styles.result} >
        <a className={styles.title} href={props.story_url}>{props.story_title}</a>
        <div className={styles.seperator}>--</div>
        <a className={styles.url} href={props.story_url}>{props.story_url}</a>
      </div>
    )
  }
}