import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import SearchBar from './SearchBar'
import ListContainer from './ListContainer'

import FactContainerStyles from '../styles/FactContainer'

function FactContainer (props) {
  const { classes } = props

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <SearchBar/>
        <ListContainer></ListContainer>
      </CardContent>
    </Card>
  )
}

FactContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(FactContainerStyles)(FactContainer)