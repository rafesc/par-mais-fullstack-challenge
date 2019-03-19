import { fade } from '@material-ui/core/styles/colorManipulator'

const styles = theme => ({
  root: {
    width: '100%'
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#64A7A5',
    boxShadow: 'initial',
    '&:hover': {
      backgroundColor: '#487776',
      boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)'
    },
    color: '#FFFFFF'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.55),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.85),
    },
    '&:focus-within': {
      backgroundColor: fade(theme.palette.common.white, 0.85),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 1,
      width: 'auto',
    },
  },
  searchIcon: {
    color: '#7D989A',
    width: theme.spacing.unit * 7,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  select: {
    color: '#FFFFFF',
    marginTop: '0 !important'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  inputLabel: {
    color: '#FFFFFF',
    top: -16
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    marginTop: 0,
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 7,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 250,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  toolbar: {
    backgroundColor: '#64A7A5'
  }
})

export default styles