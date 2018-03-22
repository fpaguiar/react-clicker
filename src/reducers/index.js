export default function(state = {}, action) {
    switch(action.type) {
        case 'UPDATE_COUNTER':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}