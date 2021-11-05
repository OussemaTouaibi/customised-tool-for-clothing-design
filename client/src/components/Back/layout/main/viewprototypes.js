import React from 'react';
import PersistentDrawerLeft from '../../MainView/Nav/Nav'
import Footer from '../../MainView/Footer/Footer'
import FeaturedPrototype from '../../../shared/featured-prototype'
import { PrototypesContext } from '../../../../context/Prototypes-context'
import '../../../../pages/front/all-prototype-page.styles.scss'
import { useContext } from 'react';
import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {useEffect} from 'react';
import {getPrototypes} from '../../../../actions/prototypes'


function Viewprototypes({ setCurrentId }) {

//   const { prototypes } = useContext(PrototypesContext);
//   const allprototypes = prototypes.map(prototype => (
//   <FeaturedPrototype { ...prototype } key={prototype.id} />
//   ));
const prototypes = useSelector((state) => state.prototypes);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPrototypes());
    }, [dispatch])
    console.log(prototypes);

    return (

        <main class="page-content" >
          <PersistentDrawerLeft/>
          <div className='prototype-list-container'>
           <h2 className='prototype-list-title'>Prototypes</h2>
            <div className='prototype-list'>
                {
                    prototypes.map((prototype) => (
                        <Grid key={prototype._id} item xs={12} sm={6} md={6}>
                          <FeaturedPrototype prototype={prototype} setCurrentId={setCurrentId} />
                        </Grid>
                      ))
                }
                
            </div>
       
       </div>
       <Footer/>

            
        </main>
    )
}

export default Viewprototypes;