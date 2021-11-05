import React from 'react'
import './featured-prototype.styles.scss'
import { useDispatch } from 'react-redux';
import {deleteItem} from '../../actions/items'

const FeaturedItem = ({item, setCurrentId}) => {
    // const { imageUrl, title } = item;
    const dispatch = useDispatch();
    return (
        <div className='featured-prototype'>
            <div className='featured-image'>
                <img src={item.imageUrl} alt='item' />
            
            </div>
            <div className='name-size'>
                <h3> {item.name} </h3>
                <button className='button is-black noname-btn'>Use this</button>
                <button className='button is-black noname-btn' onClick={() => dispatch(deleteItem(item._id))}>delete</button>
            </div>
        </div>
    );
} 

export default FeaturedItem;