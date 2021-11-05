import React, { useContext } from 'react';
import Layout from '../../components/shared/layout'
import { MydesignsContext } from '../../context/mydesigns-context'
import './all-prototype-page.styles.scss'
import '../../components/mydesigns/Mydesigns'
import FeaturedDesign from '../../components/shared/featured-design'
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box'

const Mydesign = () => {
    const { designs } = useContext(MydesignsContext);
    
    return(
        <Layout>
            <Box pt={5} pb={5}>
        <Grid
        container direction="row" alignItems="center" spacing={5}   justify="space-evenly"

        >
          
         { designs.map(design => (
        <FeaturedDesign { ...design } key={design.id} />
    ))}
      
       </Grid>
       </Box>
       </Layout>
    );
}

export default Mydesign;
