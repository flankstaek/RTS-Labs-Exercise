import { useSelector } from 'react-redux';

import SearchBox from './components/SearchBox';
import ResultsList from './components/ResultsList';
import Spinner from './components/Spinner'
import styles from './App.module.css';

function App() {
  const loadingQuery = useSelector(state=>state.loadingQuery)

  let results = null;
  if(loadingQuery) {
    results = <Spinner />
  }
  else if(loadingQuery !== null) {
    results = <ResultsList />
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Hacker News Search</h1>
      <div className={styles.link}><a href="https://www.github.com/flankstaek/RTS-Labs-Exercise/">View on Github</a></div>
      <SearchBox />
      {results}
    </div>
  );
}

export default App;
