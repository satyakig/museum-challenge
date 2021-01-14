import { createStyles, makeStyles } from '@material-ui/styles';

const searchHeight = 54;
const searchPadding = 10;

const searchCombinedHeight = searchHeight + 2 * searchPadding;

export const appStyles = makeStyles(() => {
  return createStyles({
    main: {
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    },
    searchWrapper: {
      padding: searchPadding,
      height: `${searchCombinedHeight}px`,
      flexBasis: `${searchCombinedHeight}px`,
      width: '100%',
    },
    resultsWrapper: {
      width: '100%',
      flexGrow: 1,
      maxHeight: `calc(100vh - ${searchCombinedHeight}px)`,
      overflowY: 'auto',
      overflowX: 'hidden',
    },
  });
});
