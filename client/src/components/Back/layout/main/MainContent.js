import React, {useState} from 'react';
import PersistentDrawerLeft from '../../MainView/Nav/Nav'
import Footer from '../../MainView/Footer/Footer'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import BackupIcon from '@material-ui/icons/Backup';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import { createPrototype } from '../../../../actions/prototypes';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const currencies = [
  {
    value: 'Small',
    label: 'S',
  },
  {
    value: 'Meduim',
    label: 'M',
  },
  {
    value: 'Large',
    label: 'L',
  },
  {
    value: 'XLarge',
    label: 'XL',
  },
];



function MainContent() {

  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [postData, setPostData]=  useState({ name :'', size :'', image :''});
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPrototype(postData));
  };
    return (

        <main class="page-content" >
          <PersistentDrawerLeft/>
          <Box
           display="flex"
           alignItems="center"
           alignContent="flex-start"

         >
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      
          
          
    

        <Grid container spacing={2} justify-content="column" alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Name" value={postData.name} name='name' onChange={(e)=> setPostData({...postData, name:e.target.value})} />
          </Grid>
        </Grid>
  
      
        <Grid container spacing={2} justify-content="column" alignItems="flex-end">
          <Grid item>
            <AccessibilityNewIcon />
          </Grid>
          <Grid item>
          <TextField
          id="standard-select-currency"
          select
          label="Size"
          value={postData.size}
          onChange={(e)=> setPostData({...postData, size:e.target.value})}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          </Grid>
        </Grid>
       
       

        <Grid container spacing={2} justify-content="column" alignItems="flex-end">
          <Grid item>
            <BackupIcon />
          </Grid>
          <Grid item>
          <FileBase
                 type="file"
                 multiple={false}
                 onDone={({base64}) => setPostData({...postData, image: base64})}
          />
          </Grid>
        </Grid>
       
        

        <button className={classes.buttonSubmit} size ="large" type= "submit">Submit</button>
       
     
    </form>

    </Box>
        <Footer/>

            
        </main>
    )
}

export default MainContent;