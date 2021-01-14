import { createStyles, makeStyles } from '@material-ui/styles';

export const itemsStyles = makeStyles(() => {
  return createStyles({
    grid: {
      border: '1px solid black',
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
    },
    gridItem: {
      width: '100%',
    },
    itemCard: {
      height: '100%',
    },
    itemCardHeader: {
      cursor: 'pointer',
      flexGrow: 1,
      textOverflow: 'ellipsis',
    },
    itemCardMedia: {
      cursor: 'pointer',
      height: '275px',
    },
    itemCardContent: {
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      overflow: 'hidden',
    },
  });
});
