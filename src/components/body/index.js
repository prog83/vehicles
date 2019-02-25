import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import getVehiclesByLicensePlate from "../../lib/api";

const styles = theme => ({
  containerBody: {
    padding: '5px',
  },
  containerFind: {
    paddingTop: theme.spacing.unit,
  },
  containerData: {
    paddingTop: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class AppBody extends Component {
  state = {
    error: null,
    isLoaded: true,
    licensePlate: '',
    items: ''
  }

  onChangeLicensePlate = (e) => {
    const value = e.target.value;
    this.setState({[e.target.id]: value.toUpperCase()});
  }

  getData = () => {
    this.setState({
      isLoaded: false
    });

    getVehiclesByLicensePlate(this.state.licensePlate)
      .then(({data}) => {
        this.setState({
          isLoaded: true,
          // items: JSON.stringify(data, null, 2)
          items: data
        });        
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error
        });
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;    
    const { error, isLoaded, items } = this.state;
    
    let data;    
    if (error) {
      data = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      data = <div>Loading...</div>;
    } else {
      if (items) {
        data = (<ul>
                  {items.map(item => (
                    <li key={item.id}>
                      {JSON.stringify(item, null, 2)}
                    </li>
                  ))}
                </ul>
                );
      }
    }

    return (
      <div className={classes.containerBody}>
        <Typography variant="h5" align="center">
          Пошук АМТ
        </Typography>
        
        <div className={classes.containerFind}>
          {/* < autoComplete="off"> */}
            <TextField
                required
                id="licensePlate"
                label="ДНЗ"              
                className={classes.textField}
                value={this.state.licensePlate}
                onChange={this.onChangeLicensePlate}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button 
                variant="contained" 
                className={classes.button}
                onClick={this.getData}>
                Пошук
              </Button>
            {/* </form> */}
            
            <div className={classes.containerData}>
              {data}
            </div>
        </div>
      </div>
    );

  }
  
}

export default withStyles(styles)(AppBody);