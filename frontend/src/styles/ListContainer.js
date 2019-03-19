const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 800,
    maxHeight: 500,
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  }
})

export default styles