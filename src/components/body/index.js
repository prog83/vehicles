import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import TextField  from "../common/textfield";
import MultipleSelect from "../common/multipleselect";
import DatePicker from "../common/datepicker";
import * as Db from "../../db";

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
      <form className={classes.container} noValidate>
        <TextField id="driversLicenseNum" label="Серія, номер" required />
        <MultipleSelect id="driversLicenseCountry" label="Країна" data={Db.dictionary().psprvstr} />
        <MultipleSelect id="driversLicenseCategory" label="Категорія" data={Db.dictionary().katpv} />      
        <DatePicker
          id="driversLicenseDate"
          label="Дата видачі"
          required
        />
        <DatePicker
          id="withDrawelDateTime"
          label="Дата вилучення"
          required
        />
      </form>
    </div>
  );
}

export default withStyles(styles)(AppBody);