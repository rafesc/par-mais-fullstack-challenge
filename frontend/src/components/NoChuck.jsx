import React from 'react'
import { Grid, Paper, Typography } from '@parmais/par-ui-material'

export default () => {

  return (
    <div style={{ padding: '25px' }}>
      <Grid
        container
        justify="center"
        alignItems="center">
        <Grid item>
          <Paper style={{ padding: '50px' }}>
            <Typography>
              "No facts about Chuck Norris were found. We probably don't have access..."
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}