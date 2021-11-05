import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './tool.scss'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { shadows } from '@material-ui/system';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import Modal from '../tool-area/tool-area'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menuitem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
}));



const Tool = () => {
  const classes = useStyles();

   
    return (
        <div className="test">
     
     
       <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          
          <MenuItem className={classes.menuitem}><AccessibilityIcon color="primary"/><Modal/></MenuItem>
          <MenuItem className ={classes.menuitem}><TextFieldsIcon color="primary"/>Add text</MenuItem>
          <MenuItem className={classes.menuitem}><ImageIcon color="primary"/>Import an image</MenuItem>
          <MenuItem className={classes.menuitem}><UndoIcon color="primary"/>Undo</MenuItem>
          <MenuItem className={classes.menuitem}><RedoIcon color="primary"/>Redo</MenuItem>
        </MenuList>
      </Paper>
      </div>
    
         <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">



        <Typography component="div" style={{ backgroundColor: 'white', height: '80vh' }} />




         
      </Container>
    </React.Fragment>
            
       
       
      
      </div>




    );
}

export default Tool;