import React, { useCallback, useEffect, useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStateType } from 'redux/rootReducer';
import { searchStyles } from './Search.styles';
import { updateSearchAction } from 'redux/AppActions';

const INPUT_INTERVAL = 250; // ms TODO

function Search(): JSX.Element {
  const dispatch = useDispatch();
  const styles = searchStyles();

  const [searchStr, setSearchStr] = useState('');
  const savedSearchStr = useSelector((state: GlobalStateType) => {
    return state.searchReducer.search;
  });

  const updateSearch = useCallback(() => {
    const trimmedStr = searchStr.trim();

    if (trimmedStr.length > 0 && trimmedStr.localeCompare(savedSearchStr) !== 0) {
      dispatch(updateSearchAction(trimmedStr));
    }
  }, [dispatch, searchStr, savedSearchStr]);

  const onKeyUp = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        updateSearch();
      }
    },
    [updateSearch],
  );

  useEffect(() => {
    console.log('log', savedSearchStr);
  }, [savedSearchStr]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      updateSearch();
    }, INPUT_INTERVAL);

    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keyup', onKeyUp);
      window.clearInterval(interval);
    };
  }, [onKeyUp, updateSearch]);

  return (
    <div className={styles.search}>
      <TextField
        className={styles.input}
        label="Search"
        placeholder="Search for items"
        variant="outlined"
        value={searchStr}
        fullWidth={true}
        onBlur={updateSearch}
        onChange={(event) => {
          setSearchStr(event.target.value);
        }}
      />
      <IconButton className={styles.icon} onClick={updateSearch}>
        <SearchIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Search;
