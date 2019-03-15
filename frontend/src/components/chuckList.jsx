import React from 'react'
import { Grid, Paper, Typography } from '@parmais/par-ui-material'

import { getRandom } from '../services/factsService'

/*
  TODO fetch data using the swagger API methods described in /docs
  hint:
  import swagger from '../api'
  swagger.then((client) => client.apis.facts.randomFact().then(console.log))
*/

export default () => {

  getRandom()

  return (
    <div style={{ padding: '100px' }}>
      <Grid container justify="center"
            alignItems="center">
        <Grid item>
          <Paper style={{ padding: '100px' }}>
            <Typography>
              "Chuck Norris raced light. Now he is always in the dark!"
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}