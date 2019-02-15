import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

function AppBody(props) {
  const { classes } = props;
  return (
    <div id="body">
      <Typography variant="h5" align="center">
        Введення
      </Typography>
      <Typography variant="h6" align="left">
        Посвідчення водія
      </Typography>

    </div>
  );
}

export default withStyles(styles)(AppBody);