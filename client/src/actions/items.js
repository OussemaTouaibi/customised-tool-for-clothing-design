import * as api from '../api';


//action creators
export const getItems = () => async (dispatch) =>{
    try {
        const { data } = await api.fetchItems();
        dispatch({ type : 'FETCH_ALL', payload : data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createItem = (item) => async (dispatch) =>{
    try {   
        const {data} = await api.createItems(item);
        dispatch ({type : 'CREATE', payload : data});
    } catch (error) {
          console.log(error.message)   ;
    }
}

export const deleteItem = (id) => async (dispatch) => {
    try {
      await api.deleteItem(id);
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };