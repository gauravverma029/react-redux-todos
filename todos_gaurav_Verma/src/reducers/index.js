import {combineReducers} from 'redux';
import todoreducer from './reducer_todo';

const rootReducer = combineReducers({
	 todolist : todoreducer,
});
export default rootReducer;