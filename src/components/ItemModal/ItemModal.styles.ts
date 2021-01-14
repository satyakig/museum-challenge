import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

export const itemModalStyles = makeStyles(({ spacing }: Theme) => {
  return createStyles({
    closeButton: {
      position: 'absolute',
      right: spacing(2.5),
      top: spacing(1),
    },
    dialog: {
      '& .MuiDialog-paper': {
        minWidth: '60vw',
      },
    },
    itemCard: {
      height: '100%',
      overflowX: 'hidden',
      overflowY: 'auto',
    },
    itemCardHeader: {},
    itemCardMedia: {
      height: '320px',
    },
    itemCardContent: {},
    itemCardContentText: {
      marginTop: '8px',
    },
    label: {
      userSelect: 'none',
      fontWeight: 'bold',
    },
  });
});
