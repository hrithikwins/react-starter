// this import line should be added everytime you create a file
import React from 'react';
// this import is for declaring custom styles for the components
import { makeStyles } from '@material-ui/core/styles';
// All the components we need are stored in @material-ui/ComponentName
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  // this is a map defined in makeStyles and the map names are used as classes
  // to decorate the html elements
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


// The AddEmployee() function is a react component which we are exporting by
// default from our AddEmployee.js file and will be imported in src/App.js
export default function AddEmployee() {

  // the useStyles defined above(line 9) is stored as a map object in 'classes'
  // Always in react version above 16  we need to re-instantiate classes i.e,
  // create objects or declare variables
  const classes = useStyles();

  // simpleEvent function demonstrates an event on click
  function simpleEvent() {
    alert('Welcome to this demo application')
  }

  // the return method uses the JSX syntax to create structure of the webpage
  return (
    <>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
    <Button variant="contained" color="secondary" onClick={simpleEvent}>
      CLICK ME
    </Button>
    </>
  );
}
