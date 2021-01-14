import React, { useCallback, useEffect, useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStateType } from 'redux/rootReducer';
import { searchStyles } from './Search.styles';
import { updateSearchTermAction } from 'redux/AppActions';

// The user input is checked every 500ms, this value could be increased/decreased based on
// if we want more or less requests being made ot the Museum api
const INPUT_INTERVAL = 500; // ms

/**
 * Sanitizes the user input string
 * Gets rid of non alphanumeric values
 * @param input
 */
function sanitizeString(input: string): string {
  return input.replace(/[^\x20-\x7E]/g, '').trim();
}

/**
 * Displays a text input where you can type
 * @constructor
 */
function Search(): JSX.Element {
  const dispatch = useDispatch();
  const styles = searchStyles();

  const [searchStr, setSearchStr] = useState('');
  const savedSearchStr = useSelector((state: GlobalStateType) => {
    return state.searchReducer.search;
  });

  // If the current user input is different from what is saved in redux, update redux
  const updateSearch = useCallback(() => {
    const cleanStr = sanitizeString(searchStr);

    if (cleanStr.length > 0 && cleanStr.localeCompare(savedSearchStr) !== 0) {
      dispatch(updateSearchTermAction(cleanStr));
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
    // Check for whether the user input has changed every INPUT_INTERVAL
    // This is so that we don't send too many requests as the user is typing
    const interval = window.setInterval(() => {
      updateSearch();
    }, INPUT_INTERVAL);

    // Adding a listener for the enter button press
    // Works the same way as the search icon button
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
