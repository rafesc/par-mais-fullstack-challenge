import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { ifElse } from 'ramda'

import ListContainerStyles from '../styles/ListContainer'

import NoChuck from './NoChuck'

class ListContainer extends React.Component {

  renderList (list) {

    return list.map(({ category, value }, index) => {
      return (
        <ListItem key={index}>
          <ListItemText
            primary={value}
            secondary={`Category: ${category || 'None'}`}
          />
        </ListItem>
      )
    })
  }

  renderEmptyList () {
    return <NoChuck/>
  }

  renderFacts () {
    return ifElse(
      (list) => list.length,
      this.renderList,
      () => ifElse(
        (list) => list.length,
        (fact) => this.renderList(fact),
        this.renderEmptyList
      )(this.props.randomFact)
    )(this.props.factsList)
  }

  render () {
    const { classes } = this.props

    let facts = this.renderFacts()

    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <div className={classes.container}>
              <List>
                {facts}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

ListContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = ({ factsList, randomFact }) => {
  return {
    factsList,
    randomFact
  }
}

export default connect(mapStateToProps)(withStyles(ListContainerStyles)(ListContainer))