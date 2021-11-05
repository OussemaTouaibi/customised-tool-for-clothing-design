import {combineReducers} from 'redux';
 import prototypes from './prototypes'
 import items from './items'

export default combineReducers({
    prototypes,
    items,
})