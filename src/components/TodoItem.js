import React from 'react';
//import Classnams from 'classnames'
import './TodoItem.css';

class TodoItem extends React.Component{
    
    DataList=(props)=>{
        const todoList=[
            {key:0,value:"aaaa" ,isDisplay:true},
            {key:1,value:"aaaa" ,isDisplay:true},
            {key:2,value:"aaaa" ,isDisplay:true},
            {key:3,value:"aaaa" ,isDisplay:true}
        ];
        // const classnames="TodoItem";
        // if(todoList.map((item)=>item.isDisplay)
        // {
        //     classnames+="TodoItem-Complete";
        // }
        // onclickItem=(item)=>{
        //     const index=item.indexOf()
        //     this.setState({
        //         todoList=[
        //             ...todoList(0,item.key)
        //         ]
        //     })
        // }
        const TodoItems=todoList.map((item)=><li key={item.key} >{item.value}</li>);
        return TodoItems;
    }

    render(){
        const TodoItems=this.DataList
        return(
            <div>
                <TodoItems></TodoItems>
            </div>
        )
    }
}

export default TodoItem;