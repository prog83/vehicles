import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  underline: {
    textDecoration: "underline",
  }
};

function AppHeader(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <a href="/">
            <img src="logo.png" alt="logo" className="logo" />
          </a>
          <Typography variant="h5" color="inherit">
            ІПНП
          </Typography>
          <Typography variant="h6" align="center" color="inherit" className={classNames(classes.grow, classes.underline)}>
            {props.title}           
          </Typography>
          <IconButton color="inherit">
            <HelpOutlineIcon />
          </IconButton>          
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);