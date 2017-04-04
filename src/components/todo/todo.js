import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchTodos,createTodos,updateTodo} from '../../actions/index';
import {bindActionCreators} from 'redux';
import './App.css';

class Todo extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
          id: '', title: '' , status: 0
     }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var tmpstate = this.state;
    tmpstate.title = event.target.value;
    tmpstate.id = Object.keys(this.props.todolist.list).length + 1;
    this.setState(tmpstate);
  }

  handleSubmit(event) {
    this.props.createTodos(this.state);
    event.preventDefault();

  }

  updateTodo(key,value){
    this.props.updateTodo(key,value);
  }


componentWillMount() {
  this.props.fetchTodos();

}

renderTodo(status){
     return this.props.todolist.list.map((todo,i)=>{
          if(todo.status === status) {
              return (
                     <a href="#" className="list-group-item" key={todo.id}>
                      <span className="upgrade">
                      <h4 className="list-group-item-heading ">{todo.title}</h4>
                      </span>
                      <span className="upgrade">
                     {status !== 2 ? <a href="javascript:void(0)" className="btn btn-default btn-xs btnpro" onClick={()=>{this.updateTodo(i,status)}}>{status==0?'On Progress':'Done'}</a> : ''}
                      </span>                      
                    </a>
              )
            }
      })
  }

  render() {
    const todolist = this.props.todolist.list;
    if(typeof todolist == 'undefined'){
       return ( <div>Loading</div> );
    }

    return (
      <div>
       <div className="col-md-12">
          <h5 className="text-center">Done by Gaurav Verma</h5>

       </div>
      <div className="col-md-12">
         <div className="col-md-6 text-left">
          <form action="javascript:;" className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="New Project Create" value={this.state.title} onChange={this.handleChange}/>
            </div>
              <button type="submit" className="btn btn-primary">Submit</button>
           </form>
          </div>
          <div className="col-md-6 text-right">
            <button className="btn btn-primary" type="button">
                Projects <span className="badge">{Object.keys(todolist).length}</span>
            </button>
          </div>
       </div>
    

    <div className="col-md-12 todoadd">
          <div className="col-md-4">
              <div className="list-group">
                <a href="#" className="list-group-item active">
                  <h4 className="list-group-item-heading" >
                        <span>To Do</span>
                        <span className="projectdisplay">
                          <button className="btn btn-default" type="button">
                              Projects <span className="badge">{todolist.filter(function(todo){return todo.status === 0}).length}</span>
                          </button>
                        </span>
                  </h4>
                </a>
                {this.renderTodo(0)}

              </div>
          </div>

           <div className="col-md-4">
              <div className="list-group">
                <a href="#" className="list-group-item active">
                  <h4 className="list-group-item-heading" >
                        <span>In Progress</span>
                        <span className="projectdisplay">
                          <button className="btn btn-default" type="button">
                              Projects <span className="badge">{todolist.filter(function(todo){return todo.status === 1}).length}</span>
                          </button>
                        </span>
                  </h4>
                </a>
                {this.renderTodo(1)}
              </div>
          </div>


           <div className="col-md-4">
              <div className="list-group">
                <a href="#" className="list-group-item active">
                  <h4 className="list-group-item-heading" >
                        <span>Done</span>
                        <span className="projectdisplay">
                          <button className="btn btn-default" type="button">
                              Projects <span className="badge">{todolist.filter(function(todo){return todo.status === 2}).length}</span>
                          </button>
                        </span>
                  </h4>
                </a>
                {this.renderTodo(2)}
              </div>
          </div>

       </div>
                           <todolist key="3"/>

    </div>   
    );
  }
}

function mapStateToProps(state){
  return {
      todolist : state.todolist
  }
}

function mapDispatchToProps(dispatch){
   return bindActionCreators({fetchTodos,createTodos,updateTodo},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);
