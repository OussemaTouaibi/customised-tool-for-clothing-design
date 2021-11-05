

export default (prototypes = [], action) => {
    switch (action.type) {

        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...prototypes, action.payload];
        case 'DELETE':
                return prototypes.filter((prototype) => prototype._id !== action.payload);    

        default:
            return prototypes;
    }
}
