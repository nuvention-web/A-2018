import { userConstants } from '../_constants';

export function experience(state = {}, action){
    switch (action.type){
        case userConstants.ADDEXP_REQUEST:
           return { addexping: true };
        case userConstants.ADDEXP_FAILURE:
           return {};
        case userConstants.ADDEXP_SUCCESS:
           return {};
        default:
           return state;
    }
}