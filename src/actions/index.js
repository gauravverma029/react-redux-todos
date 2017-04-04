export const  FETCH_TODOS = 'FETCH_TODOS';
export const  CREATE_TODOS = 'CREATE_TODOS';
export const  UPDATE_TODOS = 'UPDATE_TODOS';


	var req = [
		{id:1 , title: 'Project 1' , status: 0},
		{id:2 , title: 'Project 2' , status: 2},
		{id:3 , title: 'Project 3' , status: 0},
		{id:4 , title: 'Project 4' , status: 1},
		{id:5 , title: 'Project 5' , status: 1},
		{id:6 , title: 'Project 6' , status: 0},
		{id:7 , title: 'Project 7' , status: 1},
		{id:8 , title: 'Project 8' , status: 0},
		{id:9 , title: 'Project 9' , status: 2},
		{id:10 , title: 'Project 10' , status: 0}
	];

export function fetchTodos(){
	return {
		type : FETCH_TODOS,
		payload : req
	};
}

export function createTodos(props){
	req.push({id:props.id , title:props.title , status: props.status})
	return {
		type :  CREATE_TODOS,
		payload : req
	};
}

export function updateTodo(key,status){
    req[key]['status'] = status+1;
    return {
		type :  UPDATE_TODOS,
		payload : req
	};

}