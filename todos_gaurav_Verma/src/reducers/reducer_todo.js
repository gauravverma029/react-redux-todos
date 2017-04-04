import {FETCH_TODOS,CREATE_TODOS,UPDATE_TODOS} from '../actions/index';
const INITIAL_STATE = {};
export default function(state = INITIAL_STATE , action){
	switch(action.type){
		case FETCH_TODOS:
			return {...state,list:action.payload}
		case CREATE_TODOS:
			return {...state,list:action.payload}
		case UPDATE_TODOS:
			return {...state,list:action.payload}
	default:
	  return state;	
	}
} 