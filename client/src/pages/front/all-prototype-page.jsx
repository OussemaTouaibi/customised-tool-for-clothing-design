import React, { useContext } from 'react';
import Layout from '../../components/shared/layout'
import FeaturedPrototype from '../../components/shared/featured-prototype'
import { PrototypesContext } from '../../context/Prototypes-context'
import './all-prototype-page.styles.scss'
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {useEffect} from 'react';
import {getPrototypes} from '../../actions/prototypes'
import { useDispatch } from 'react-redux';



const AllPrototypes = ({ setCurrentId }) => {
    // const { prototypes } = useContext(PrototypesContext);
    // const allprototypes = prototypes.map(prototype => (
    //     <FeaturedPrototype { ...prototype } key={prototype.id} />
    // ));
    const prototypes = useSelector((state) => state.prototypes);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPrototypes());
    }, [dispatch])
    console.log(prototypes);
    return(
        <Layout>
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
       </Layout>

    );
}

export default AllPrototypes;
