/**
 * Created by alexander on 23.01.18.
 */

export default function operators(state = {}, action) {

    if (action.type === 'GET_OPERATORS_SUCCESS') {
        let data = action.payload.sort((a, b) => (a.name == b.name ? 0 : a.name > b.name ? 1 : -1 ));
        return {...state, data: data};
    }

    return state

}
