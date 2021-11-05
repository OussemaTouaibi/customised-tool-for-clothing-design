import React from 'react'
import {useEffect} from 'react';
import {getPrototypes} from '../../actions/prototypes'
import './featured-prototype.styles.scss'
import { useDispatch } from 'react-redux';
import {deletePrototype} from '../../actions/prototypes'
import { Link } from 'react-router-dom';

const FeaturedPrototype = ({prototype, setCurrentId}) => {
    const dispatch = useDispatch();
    return (
        <div className='featured-prototype'>
            <div className='featured-image'>
                <img src={prototype.image} alt='prototype' />
            
            </div>
            <div className='name-size'>
                <h3> {prototype.name} </h3>
                <p> {prototype.size} </p>
           
                <button className='button is-black noname-btn'>Use this</button>
                
                <button className='button is-black noname-btn' onClick={() => dispatch(deletePrototype(prototype._id))}>delete</button>
            </div>
        </div>
    );
} 

export default FeaturedPrototype;