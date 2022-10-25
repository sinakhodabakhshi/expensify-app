
export default (state = {text: null} , action) => {
    switch (action.type) {
        case 'ADD':
            return {
                text: 'your item added succesfully',
                act: 'add'
            };
        case 'EDITE':
            return {
                text: 'your changes stored succesfully',
                act: 'edite'
            };
        case 'DELETE':
            return {
                text: 'your item removed succesfully',
                act: 'delete'
            };
        case 'NONE':
            return {
                text: null
            }
        default :
            return state;
    }
}