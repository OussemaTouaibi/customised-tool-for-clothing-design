import React, { useContext } from 'react';
import FeaturedItem from '../../../shared/featured-item' 
import { ItemsContext } from '../../../../context/items-context'
import '../../../../pages/front/all-prototype-page.styles.scss'
import '../../../items/item'
import PersistentDrawerLeft from '../../MainView/Nav/Nav'
import Footer from '../../MainView/Footer/Footer'
import { getItems } from '../../../../actions/items';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {useEffect} from 'react';


function ViewItem({ setCurrentId }) {
    // const { items } = useContext(ItemsContext);
    // const allitems = items.map(item => (
    //     <FeaturedItem { ...item } key={item.id} />
    // ));
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getItems());
    }, [dispatch])
    console.log(items);

    return (
        
        <main class="page-content" >
          <PersistentDrawerLeft/>
          <div className='prototype-list-container'>
           <h2 className='prototype-list-title'>Items</h2>
            <div className='prototype-list'>
            {
                    items.map((item) => (
                        <Grid key={item._id} item xs={12} sm={6} md={6}>
                          <FeaturedItem item={item} setCurrentId={setCurrentId} />
                        </Grid>
                      ))
                }
                
            </div>
       
       </div>
       <Footer/>

            
        </main>

    )
}

export default ViewItem;
