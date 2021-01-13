import { createStyles, makeStyles } from '@material-ui/styles';

export const searchStyles = makeStyles(() => {
  return createStyles({
    search: {
      display: 'flex',
      flexDirection: 'row',
    },
    input: {
      flexGrow: 1,
    },
    icon: {
      flexShrink: 0,
    },
  });
});
