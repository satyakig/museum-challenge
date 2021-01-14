import React from 'react';
import Search from 'components/Search/Search';
import { appStyles } from './App.styles';
import DataLoadContainer from 'containers/DataLoadContainer';

function App(): JSX.Element {
  const styles = appStyles();

  return (
    <main className={styles.main}>
      <DataLoadContainer />
      <div className={styles.searchWrapper}>
        <Search />
      </div>
      <div className={styles.resultsWrapper}>other shit</div>
    </main>
  );
}

export default App;
