import React from 'react';
import Search from 'components/Search/Search';
import DataLoadContainer from 'containers/DataLoadContainer';
import Items from 'components/Items/Items';
import ItemModal from 'components/ItemModal/ItemModal';
import { appStyles } from './App.styles';

/**
 * Entry point of the application
 * Creates the base layout and mounts all the components used in this project
 * @constructor
 */
function App(): JSX.Element {
  const styles = appStyles();

  return (
    <main className={styles.main}>
      <DataLoadContainer />
      <ItemModal />
      <div className={styles.searchWrapper}>
        <Search />
      </div>
      <div className={styles.resultsWrapper}>
        <Items />
      </div>
    </main>
  );
}

export default App;
