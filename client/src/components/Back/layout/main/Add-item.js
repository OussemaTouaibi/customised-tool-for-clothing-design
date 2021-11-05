import React, {useState} from 'react';
import PersistentDrawerLeft from '../../MainView/Nav/Nav'
import Footer from '../../MainView/Footer/Footer'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import BackupIcon from '@material-ui/icons/Backup';
import { createItem } from '../../../../actions/items';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';


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


function Additem() {
 const classes = useStyles();
 
 const [itemData, setItemData]=  useState({ name :'',imageUrl :'' });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createItem(itemData));
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
          <CreateIcon />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Name"value={itemData.name} name='name' onChange={(e)=> setItemData({...itemData, name:e.target.value})} />
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
                 onDone={({base64}) => setItemData({...itemData, imageUrl: base64})}
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

export default Additem;