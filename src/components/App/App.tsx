import React from 'react';
import Search from 'components/Search/Search';
import { appStyles } from './App.styles';

function App(): JSX.Element {
  const styles = appStyles();

  return (
    <main className={styles.main}>
      <div className={styles.searchWrapper}>
        <Search />
      </div>
      <div className={styles.resultsWrapper}>other shit</div>
    </main>
  );
}

export default App;
