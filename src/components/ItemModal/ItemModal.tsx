import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dialog,
  Typography,
  IconButton,
  CardHeader,
  CardMedia,
  CardContent,
  Card,
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import { GlobalStateType } from 'redux/rootReducer';
import { updateSelectedItemAction } from 'redux/AppActions';
import lodash from 'lodash';
import { itemModalStyles } from './ItemModal.styles';

function ItemModal(): JSX.Element {
  const dispatch = useDispatch();
  const styles = itemModalStyles();

  const selectedItem = useSelector((state: GlobalStateType) => {
    return state.searchReducer.selectedItem;
  });
  const objectDataMap = useSelector((state: GlobalStateType) => {
    return state.resultsReducer.objectsDataMap;
  });

  function closeModal(): void {
    dispatch(updateSelectedItemAction(null));
  }

  if (selectedItem === null) {
    return <div />;
  }

  const objectData = objectDataMap.get(selectedItem);

  if (!objectData || objectData.data === null) {
    return <div />;
  }

  const data = objectData.data as Record<string, unknown>;

  return (
    <Dialog
      onClose={closeModal}
      open={true}
      disableBackdropClick={false}
      disableEscapeKeyDown={false}
      fullWidth={true}
      className={styles.dialog}
    >
      <IconButton size="medium" onClick={closeModal} className={styles.closeButton}>
        <CloseRounded />
      </IconButton>
      <Card className={styles.itemCard}>
        <CardHeader title={data.title as string} className={styles.itemCardHeader} />
        <CardMedia
          image={data.primaryImage as string}
          title={data.title as string}
          className={styles.itemCardMedia}
        />
        <CardContent className={styles.itemCardContent}>
          {Object.keys(data)
            .filter((key) => {
              const type = typeof data[key];
              const keyData = data[key];
              return (type === 'string' || type === 'number') && keyData !== '';
            })
            .map((key) => {
              return (
                <Typography className={styles.itemCardContentText} key={key}>
                  <span className={styles.label}>{lodash.capitalize(key)}</span>: {data[key]}
                </Typography>
              );
            })}
        </CardContent>
      </Card>
    </Dialog>
  );
}

export default ItemModal;
