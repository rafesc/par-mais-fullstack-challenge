import React from 'react'
import { BioFinanceiraTheme, Grid, Header as ParHeader, Typography } from '@parmais/par-ui-material'
import { Link } from 'react-router-dom'

const style = {
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none'
  },
  '&:active': {
    color: 'white'
  },
  '&:visited': {
    color: 'white'
  }
}

export default function Header () {
  return (
    <ParHeader
      classes="justify-center"
      boxShadow={'0px -3px 20px 0px'}
      backgroundImage={BioFinanceiraTheme.styles.colors.seeGradient}
      height="70px"
      justifyContent="center"
    >
      <Grid container justify="center">
        <Grid item>
          <Typography
            align="center"
            style={BioFinanceiraTheme.styles.fonts.mainTitle}
          >
                  <span>
                    <b>
                      <Link style={style} to="/">Home</Link>
                      &ensp;&ensp;
                      <Link style={style} to="/docs/">Api</Link>
                    </b>
                  </span>
          </Typography>
        </Grid>
      </Grid>
    </ParHeader>)
}