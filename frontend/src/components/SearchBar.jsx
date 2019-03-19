import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import { withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import Sync from '@material-ui/icons/Sync'

import { capitalize } from 'lodash'
import { ifElse } from 'ramda'

import { connect } from 'react-redux'

import SearchBarStyles from '../styles/SearchBar'

import { fetchCategories, fetchFactsList, fetchRandomFact, resetFactsList } from '../actions'

class SearchBar extends React.Component {

  state = { query: '', selectedCategory: '', categoriesList: [] }

  componentDidMount () {
    this.props.fetchCategories()
  }

  handleCategorySelected (event) {
    this.setState({
      selectedCategory: event.target.value,
      query: ''
    })

    this.props.resetFactsList()
  }

  handleOnChange (event) {
    this.setState({
      selectedCategory: '',
      query: event.target.value
    })

    return ifElse(
      (value) => value.length < 3,
      ifElse(
        (value) => !value.length,
        () => this.props.resetFactsList(),
        () => undefined
      ),
      this.props.fetchFactsList
    )(event.target.value)
  }

  handleRandomClick () {
    this.setState({
      query: ''
    })

    this.props.fetchRandomFact(this.state.selectedCategory)
  }

  render () {
    const { classes } = this.props

    let categoriesList = this.props.categoriesList
      .map((category) => {
        return <MenuItem key={category} value={category}>{capitalize(category)}</MenuItem>
      })

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                value={this.state.query}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={(event) => this.handleOnChange(event)}
              />
            </div>
            <div className={classes.grow}/>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="category-simple" className={classes.inputLabel}>Category</InputLabel>
              <Select
                value={this.state.selectedCategory}
                onChange={(event) => this.handleCategorySelected(event)}
                inputProps={{
                  name: 'selectedCategory',
                  id: 'category-simple',
                }}
                className={classes.select}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {categoriesList}
              </Select>
            </FormControl>
            <div className={classes.sectionDesktop}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => this.handleRandomClick()}>
                <Sync className={classes.extendedIcon}/>
                Random Fact
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = ({ categoriesList }) => {
  return {
    categoriesList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchFactsList: (query) => dispatch(fetchFactsList(query)),
    fetchRandomFact: (category) => dispatch(fetchRandomFact(category)),
    resetFactsList: () => dispatch(resetFactsList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(SearchBarStyles)(SearchBar))