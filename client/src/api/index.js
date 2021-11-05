import axios from 'axios';
//const url ="http://localhost:5000/dashboard";
const urlP="http://localhost:5000/prototypes";
const urlI="http://localhost:5000/items";

export const fetchPrototypes = () => axios.get(urlP);
export const createPrototype = (newPrototype) => axios.post(urlP, newPrototype);
export const deletePrototype = (id) => axios.delete(`${urlP}/${id}`);


export const fetchItems = () => axios.get(urlI);
export const createItems = (item) => axios.post(urlI, item);
export const deleteItem = (id) => axios.delete(`${urlI}/${id}`);    