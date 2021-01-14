import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, CardHeader, CardMedia, Grid, Button } from '@material-ui/core';
import { GlobalStateType } from 'redux/rootReducer';
import { ObjectData } from 'redux/AppModel';
import { updateSelectedItemAction } from 'redux/AppActions';
import { itemsStyles } from './Items.styles';

/**
 * Displays a list of items based on the search string
 * @constructor
 */
function Items(): JSX.Element {
  const dispatch = useDispatch();
  const styles = itemsStyles();
  const search = useSelector((state: GlobalStateType) => {
    return state.searchReducer.search;
  });
  const searchMap = useSelector((state: GlobalStateType) => {
    return state.resultsReducer.searchMap;
  });
  const objectDataMap = useSelector((state: GlobalStateType) => {
    return state.resultsReducer.objectsDataMap;
  });

  const [results, setResults] = useState<ObjectData[]>([]);

  /**
   * Stores the selected item in redux
   * @param objectData
   */
  function onClick(objectData: ObjectData): void {
    dispatch(updateSelectedItemAction(objectData.objectId));
  }

  /**
   * Opens the link in a new tab
   * @param link
   */
  function onLinkClick(link: string): void {
    window.open(link, '_blank');
  }

  // Get all the objects that are stored in redux which matches the search term
  useEffect(() => {
    if (search.length > 0) {
      const searchData = searchMap.get(search);

      if (searchData) {
        const tmpResults = searchData.objectIds.flatMap((objectId) => {
          const objectData = objectDataMap.get(objectId);
          return objectData !== undefined &&
            objectData.requestStatus.completed &&
            objectData.data !== null
            ? objectData
            : [];
        });

        // ONLY show 20 items
        setResults(tmpResults.slice(0, 20));
      }
    }
  }, [search, searchMap, objectDataMap]);

  // If no results are found, display a message indicating the status
  if (results.length === 0 && search.length > 0) {
    return <div>No results for, please search for something else</div>;
  }

  return (
    <Grid container={true} spacing={3}>
      {results.map((item, index) => {
        const data = item.data as Record<string, unknown>;

        return (
          <Grid item={true} sm={12} md={6} lg={4} key={index}>
            <Card className={styles.itemCard}>
              <CardHeader
                title={data.title as string}
                className={styles.itemCardHeader}
                onClick={() => {
                  onClick(item);
                }}
              />
              <CardMedia
                image={data.primaryImage as string}
                title={data.title as string}
                className={styles.itemCardMedia}
                onClick={() => {
                  onClick(item);
                }}
              />
              <CardContent className={styles.itemCardContent}>
                <Button
                  variant="outlined"
                  className={styles.button}
                  onClick={() => {
                    onLinkClick(data.objectURL as string);
                  }}
                >
                  {data.objectURL as string}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Items;
